require('dotenv').config();
const express = require('express');
var app = express();
const axios = require('axios');
const querystring = require('querystring');
const FormData = require('form-data');

var user = "sandbox@healthjump.com"
var password = "R-%Sx?qP%+RN69CS"


const authServerUrl = 'https://api.healthjump.com/authenticate'


app.use(express.json());
app.use('api/v1/items', item_router)
app.use(notfound);
app.use(err);

// axios.post(authServerUrl,{}, 
//     querystring.stringify({
//             email: user, //gave the values directly for testing
//             password: password
//     }), {
//       headers: { 
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     }).then(function(response) {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });

var bodyFormData = new FormData();
bodyFormData.append('email', user);
bodyFormData.append('password', password);
const secretKey = "yemj6bz8sskxi7wl4r2zk0ao77b2wdpvrceyoe6g";

// const get_token = async()=> {
//     const response = await axios
//     ({
//     method: "post",
//     url: authServerUrl,
//     data: bodyFormData,
//     headers: { "Content-Type": "application/x-www-form-urlencoded"},
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//       return response.data.token;
//     })
//     .catch(function (response) {
//       //handle error
//     //   console.log(response);
//     })

//     return response;
// };
const date = "20211115"


const jwt_token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmhlYWx0aGp1bXAuY29tL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTY1OTEyNDEwNCwiZXhwIjoxNjU5MTI3NzA0LCJuYmYiOjE2NTkxMjQxMDQsImp0aSI6IlBqZVM3ZWw2RVN5RWhIQUUiLCJzdWIiOjE4MSwiaWQiOjE4MSwiZW1haWwiOiJzYW5kYm94QGhlYWx0aGp1bXAuY29tIiwiY3JlYXRlZF9hdCI6IjIwMTctMDktMjUgMTM6NDg6NDAiLCJ1cGRhdGVkX2F0IjoiMjAxNy0xMS0wMyAxNjoyNDo0MSIsImZpcnN0X25hbWUiOiJTYW5kYm94IiwibGFzdF9uYW1lIjoiVXNlciIsImRpdmlzaW9uIjowLCJ0aXRsZSI6IkhKIFByb3NwZWN0IiwiYXZhdGFyIjoiZGVmYXVsdF9hdmF0YXIuanBnIiwiZW50ZXJwcmlzZV9pZCI6Nywib2xkX3VzZXJfaWQiOjAsImN1c3RvbWVyX2lkIjo1NSwic29ja2V0X3Rva2VuIjoiMmM2NTUxYjFmNjIzMTg1YTk3MDdiOWRhZWEwNDI2ZTIxNTc1Mzk2YTkyNTZiOTEwNWVhNjY1MGU4ZGQ1OGQ5MSIsImF1ZCI6ImhqIiwicm9sZXMiOlsiYWRtaW4iLCJwYXJ0bmVyIiwiYXBpIiwiZGJleHBsb3JlciIsImZpbGVfbWFuYWdlbWVudCJdLCJhd3NfZXJyb3IiOiJlcnJvciBhdXRoZXRpY2F0aW5nIHRvIGNvZ25pdG8iLCJjdXN0b21lciI6eyJpZCI6NTUsIm5hbWUiOiJzYW5kYm94IiwibmFtZV9vdmVycmlkZSI6InNhbmRib3giLCJjbHVzdGVyX2lkIjoiZGVmYXVsdCIsImhqZHdfc2NoZW1hIjoic2FuZGJveCIsInMzX2xvY2F0aW9uIjoiaGVhbHRoanVtcC1zYW5kYm94IiwicHJvZHVjdHMiOiJqdW1wQ29ubmVjdCxTMyxVbmxvYWRzQnlFbGVtZW50Iiwic3RhbmRhcmRfZWxlbWVudHMiOiJhbGxlcmd5LGFwcG9pbnRtZW50LGF0dHJpYnV0aW9uLGNoYXJnZSxkZW1vZ3JhcGhpYyxkaWFnbm9zaXMsZW5jb3VudGVyLGltbXVuaXphdGlvbixsYWJfb3JkZXIsbGFiX3Jlc3VsdCxtZWRpY2F0aW9uLG1lZHN1cmdfaGlzdG9yeSxwYXllcixwcm9jZWR1cmUscHJvdmlkZXIscXVhbGl0eV9kYXRhLHNvY2lhbF9oaXN0b3J5LHRyYW5zYWN0aW9uLHZpdGFscyIsImNvbnRhY3RzIjoiW3tcImlkXCI6XCIxXCIsXCJmaXJzdF9uYW1lXCI6XCJKaW1cIixcImxhc3RfbmFtZVwiOlwiUm93bGFuZFwiLFwiZW1haWxcIjpcImppbUBoZWFsdGhqdW1wLmNvbVwiLFwicGhvbmVcIjpcIlwifV0iLCJjdXN0b21lcl9zdWNjZXNzX21hbmFnZXIiOiJMYXVyYSBTdGV3YXJ0IiwiY3NtIjo5MSwiY3VfbGlzdF9pZCI6IjczNjc0NjY1IiwiY3VfdGVtcGxhdGVfaWQiOiJ0LTJhdTR6NWsiLCJwcmltYXJ5X2NvbnRhY3RfbmFtZSI6IiIsInByaW1hcnlfY29udGFjdF9waG9uZSI6IiIsInByaW1hcnlfY29udGFjdF9lbWFpbCI6IiIsImh1YnNwb3RfaWQiOm51bGwsInplbmRlc2tfb3JnX2lkIjoiMzYwOTc0OTE2MTUxIiwibG9nbyI6Imh0dHBzOi8vaGVhbHRoanVtcC1wdWJsaWMuczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvbG9nb3Mvc2FuZGJveC1sb2dvLnBuZyIsIm5vdGVzIjoiIiwiYWN0aXZlIjoiWSIsImN1c3RvbWVyX3R5cGUiOiJPdGhlciIsImNyZWF0ZWRfYXQiOiIyMDE3LTA3LTE4IDE2OjAyOjAwIiwidXBkYXRlZF9hdCI6IjIwMjItMDYtMTQgMTI6Mjc6MjIifX0.DA4Fkjax1acZlJQDnrmx9tHZgwU20fFV7AUVUiomQTX7xN9-kWAtYiidisPc1q82wDKwxWHJAFrbineQXFX_FadMC49YUKZf2Xqx1-VBm81KTlHzL21hVQAXF7hUNB1-aFaoHFioErOKvS7IGt6EkHgpnfT6nuk7WooxavFYckn8DlnM0rwkxO6PUCdgLpeT8N-ffN-PdKQe3ONgGddHTkyEd4LOdTeAJqyLhdcqr-elDottHEG2Tdq_DWevf41EdsKdo5Q2p4Srsx-k3rQxzmI1Qc4Zasgou0i7_6cMSU6jpfnQlrfJoACDrtd1wmK13a9sCAvalgaPfAxIvZE1yrp4bGVdV0oPANA0kJc2aHdh8nCtPoYIll9U9VqprUt9t_fjuRRlC3cuyTWWiJMnxEMPcOBxE22NsNeArTlkxaTaNT8QIVZYRxh4nn-4ZJwHJBpx7csOtxAPl3sP2o2BqWlPAF-h1VWIbMA9eUeSEpW_2wY4-WNV3Cj-JRTWeWIov87izySpXqZM8nC8l0NikrbDhp15JqAiJjgG6ImXlhm06myyyJWJ2MKQUkGNWb5VZMqh3GcPpep8EfxVoVQwg2fBpMoNzRi9h4drM38SvMCat5Lb3uhcGh64G2xexVoLlZcTWpuDnDNUaJ0hGdQWGmGB8k8xQcFdYR9jyR1KNqo`
const getMethod = `https://api.healthjump.com/hjdw/SBOX02/appointment?date=eq~${date}`;

// call https://api.healthjump.com/hjdw/SBOX02/appointment" and get the data in json

const getData = async () => {
    console.log("jwt_token",jwt_token)
    const response = await axios.get(getMethod, {
        headers: {
            Secretkey: 'yemj6bz8sskxi7wl4r2zk0ao77b2wdpvrceyoe6g',
            Authorization: `Bearer ${jwt_token}`,
            Version: 3.0
        }
    })
    .then(function(response){
        console.log(response.data);
    })
    .catch(
        function(error){
            // console.log(error);
        }
    )
    // console.log(response);
    return response;
    }

    getData();

const port = 3050;

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
    catch(err)
    {
        console.log(err);
        process.exit(1); //something went wrong
    }
}

start()
