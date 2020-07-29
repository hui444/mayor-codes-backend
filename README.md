# NUSPlanner

This is the backend code of the NUSPlanner Website.
This project is a Web-based tool designed to help students create and keep track of their favourite timetables according to the modules and preferences they choose.

## Getting Started

1. Install Visual Studio Code
2. Download both front and back end codes
3. Open both codes on Visual Studio Code
4. Run commands
   `npm install`
   and
   `npm start`
   on both terminals

## Validation of module codes

We have considered running the inputted modules through the API to check the validity but found that it would be more inefficient in doing so. Hence, we utilised a code written in Python to extract the valid module codes from the NUSMODS API. This was extracted from AY19/20. Thus, it may not be the most updated.

## Module Preference Page

To extract module data from the NUSMODS API, we utilised Axios and ran the data through an algorithm to separate the data into its respective lesson type while simultaneouly keeping track of the number of classes each of the lesson types has.

We realised that the drop down bar included duplicated class numbers. To rectify this problem, we ran all the class numbers through a simple algorithm to sieve out all the unique class numbers and sent that to the frontend.

## The Algorithm

We made multiple arrays to contain the 13 weeks, 5 days and timings from 8am to 10pm. From there, we prioritise the preferred slots and restricted slots (only 1 slot available for that class). The algorithm deletes the timing from the respective weeks and days, starting from the first module. Afterwhich, it starts to choose the slots for each module. The algorithm extracts data from the module code inputted and chooses the first slot that fits the timetable, thereafter deleting the timing from the weeks and days. It continues to do so until all slots are chosen.

As this is algorithm prioritises the first module, should the user input the least flexible module last, it is more likely for that module to not fit into the timetable, causing clashes. To work around this problem, we have coded the algorithm to throw an error and select the first slot found from the API.

The algorithm only accepts the lesson types: "Tutorial", "Lecture", "Sectional Teaching", "Laboratory" and "Recitation" as we were unaware of the other lesson types such as "Packaged Tutorial" and "Packaged Lecture" etc. when we started coding the backend. Thus, there may be some error in retriving data from the API should the module code include such lesson types.

## Built with

- MongoDB
- Express.js
- React.js
- Node.js

## Mayors

- Fang Hui Hui
- Lee Shu Ling

## Acknowledgement

- Udemy.com (Academind by Maximilian Schwarzmüller)
- Fang Pin Sern aka Benedict
