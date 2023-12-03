# CSV to iCal Converter

This repository contains a Node.js application that converts CSV files into iCal format. It provides a simple and convenient way to generate iCal files from CSV data.

## Usage

To use this converter, follow these steps:

1. Clone the repository to your local machine.
1. Install the required dependencies by running the following command:
    ```
    npm install
    ```
1. Run a test on the build
    ```
    npm run test
    ```
1. A test output ical file should have been created.
1. To run the converter for any csvfile; the following usage is the following:
    ```
    node convert.js --csvfile ./test/test.csv --icalfile ./test/test.ics
    ```
1. The converted iCal file will be generated from the csvfile location and output to the icalfile location.

# Data Input

| Field Name     | Description                           |
|----------------|---------------------------------------|
| Subject        | The subject of the event               |
| Start Date     | The date when the event starts         |
| Start Time     | The time when the event starts         |
| End Date       | The date when the event ends           |
| End Time       | The time when the event ends           |
| All Day Event  | Indicates if the event is all-day      |
| Description    | Additional description of the event    |
| Location       | The location of the event              |
| Private        | Indicates if the event is private      |

## Test CSV Example
Creates a table that specifies an example CSV input file based on the provided data.

| Subject         | Start Date | Start Time | End Date   | End Time   | All Day Event | Description                    | Location                  | Private |
|-----------------|------------|------------|------------|------------|---------------|--------------------------------|----------------------------|---------|
| ExampleSubject  | 12/02/2023 | 5:00 PM    | 12/02/2023 | 5:30 PM    | FALSE         | This is my first ical conversion | North Hollywood Regal Cinemas | TRUE    |

## Creator

This repository was created by Ismail Mitchell.


