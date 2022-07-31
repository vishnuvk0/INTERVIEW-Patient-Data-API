require('dotenv').config();
const express = require('express');
var app = express();
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

var user = "sandbox@healthjump.com";
var password = process.env.PASSWORD;

const healthJumpUrl = 'https://api.healthjump.com/';

app.use(express.json());

var bodyFormData = new FormData();
bodyFormData.append('email', user);
bodyFormData.append('password', password);
console.log(bodyFormData);
const secretKey = process.env.SECRET;

const get_token = async() => {
    const response = await axios
    ({
    method: "post",
    url: `${healthJumpUrl}authenticate`,
    data: bodyFormData,
    headers: { "Content-Type": "application/x-www-form-urlencoded"},
  })
    .then(function(response) {

        console.log('response received!');
        return response.data.token;
    })
    .catch(function (response) {
    })
    return response;
};
const date = "20211115"

const getAppointmentData = async (jwt_token) => {
    const appointment = `${healthJumpUrl}hjdw/SBOX02/appointment?date=eq~${date}`;
    console.log(appointment)
    const response = await axios.get(appointment, {
        headers: {
            Secretkey: secretKey,
            Authorization: `Bearer ${jwt_token}`,
            Version: 3.0
        }
    })
    .then(function(response){
        return response.data;
    })
    .catch(
        function(error){
            console.log(error);
        }
    )
    console.log('we got here');
    fs.writeFileSync('appointment.json', JSON.stringify(response.data), 'utf8', function(err) {
        if (err) {
            console.log(err);
        }
    });
    return response;
}

const port = 3050;

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server started on port ${port}\n\n\n`));
        const jwt_token = await get_token();
        const {data} = await getAppointmentData(jwt_token);
        write(data);
        process.exit(0);
    }
    catch(err)
    {
        console.log(err);
        process.exit(1); //something went wrong
    }
}

start()