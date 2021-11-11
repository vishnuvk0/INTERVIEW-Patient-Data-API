# The problem:

Today we'll be working through a proof of concept micro service, that actually very much closely resembles an existing service we have internally.

This microservice can be thought of as a **Patient Data Aggregation REST API**

As a patient focused healthcare company we have many different clinics we work with that each see thousands of patients. The goal of this service is to really just get a good overview of what patients are seen by a doctor on a specific day.

This tool will serve as wrapper api around a third party API, which has custom endpoints that collect data from something called an EHR. For context, an EHR is the electronic medical record system a doctor uses to store medical information. Really its the backbone of any medical practice/hospital.

- context:
  - what to tell the candidate before the meeting
    - will need IDE setup.
    - sharing screen.
    - wirting an api in node and front end in front end framework of choice
      - clairfy the back end is most important

# Implemenation Details

Today we will be building a simple backend wrapper API around the EHR API found here:

[API Docs](https://apidocs.healthjump.com/)

Please implement the following using NodeJS and React (or your favorite frontend framework of choice). Feel free to work with JS or TS.

## Backend API
