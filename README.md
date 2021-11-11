# INTERVIEW-Patient-Data-API

# **Implementation** Details

Today we will be building a simple backend wrapper API around the EHR API found here:

[API Docs](https://apidocs.healthjump.com/)

Please implement the following using NodeJS and React (or your favorite frontend framework of choice). Feel free to work with JS or TS.

## Backend API

The REST API will have to simple GET endpoints that aggregate patient data from the EHR api.

### Endpoint #1

Input: A string indicating a specific date in the format YYYY-MM-DD

**Goal: Will be used to populate a front end UI that lists all appointments for a given day, along with extra information on the patient that attended the appointment.**

Functionality:

For the given input, this endpoint must do the following:

- Query and get all appointments that occurred on the specified input day for all client_ids (client_id = a specific medical practice)
- For each patient that had a specific appointment on the input day, fetch the following extra data attributes:
  - First Name
  - Last Name
  - Phone number
  - Date of birth
  - Name of any medication they are on
- Return a final JSON payload with all aggregated data for each appointment
  - Will be used to populate a front end UI that lists all appointments for a given day, along with extra information on the patient that attended the appointment.

### Endpoint #2

Input: The unique identifier for a patient. (patient_id)

**Goal: Will be used to populate a front end UI that lists all appointments for a specific patient along with extra information on the patient.**

Functionality:

For the given input, this endpoint must do the following:

- Find all appointments the specific input patient has had across all client_ids
- Query extra attributes on the patient such as:
  - First Name
  - Last Name
  - Phone number
  - Date of birth
  - Name of any medication they are on
- Returns a final JSON payload with all aggregated data for the patient and a list of all their appointments.

## Frontend UI

Goal: Implement a **bare bones** front end interface that displays calls the two newly added endpoints and displays the data in a simple list.

The front end should be able to accept user input and make the relevant API calls to the wrapper EHR API.

A simple unordered list that displays the data and is hydrated by the JSON responses is perfectly fine.

## **Submission**

Please commit and final work to a separate branch on the repository.
