# **Implementation** Details

Today we will be building a simple backend wrapper API around the EHR API found here:

[API Docs](https://apidocs.healthjump.com/)

Please implement the following using NodeJS. Feel free to work with JS or TS.

**The backend implementation is most important here.** If we don't get to the front end that is fine. But if we do please use React.

## Backend API

The REST API will have two simple GET endpoints that aggregate patient data from the EHR api.

### Endpoint #1

Input: A string indicating a specific date in the format YYYYMMDD

**Goal: Will be used to populate a front end UI that lists all appointments for a given day**

Functionality:

For the given input, this endpoint must do the following:

- Authenticate against the EHR API
- Query and get all appointments that occurred on the specified input day for all client_ids (client_id = a specific medical practice)
- Use URI parameters to filter appointments by specific date
  ![download.png](Technical%20Question%20-%20Patient%20Data%20Aggregation%20API%20f023e4538298494ea747b6792df2c8f4/download.png)
- Return a final JSON payload with all aggregated data for each appointment
  - Will be used to populate a front end UI that lists all appointments for a given day.

### Endpoint #2

Input: The unique identifier for a patient. (patient_id)

**Goal: Will be used to populate a front end UI that lists all appointments for a specific patient along with extra information on the patient.**

Functionality:

For the given input, this endpoint must do the following:

- Authenticate against the EHR API
- Find all appointments the specific input patient has had across all client_ids
- Query extra attributes on the patient such as:
  - First Name
  - Last Name
  - Phone number
  - Date of birth
  - Name of any medication they are on
- Returns a final JSON payload with all aggregated data for the patient and a list of all their appointments.

## Frontend UI (if there is time)

Goal: Implement a **bare bones** front end interface that displays the responses to the two newly added endpoints and displays the data in a simple list.

The front end should be able to accept user input and make the relevant API calls to the wrapper EHR API.

A simple unordered list that displays the data and is hydrated by the JSON responses is perfectly fine.

## **Submission**

Please commit and final work to a separate branch on the repository.
