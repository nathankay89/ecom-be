# E-commerce Back End Starter Code


My challenge is to build the back end for an e-commerce site. I will take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

## User Story:
As a manager at an internet retail company I want a backend for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies


## Acceptance Criteria:
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Installation 

To install the necessary dependencies, run the following command:

```
npm i
npm install dotenv@8.2.0
npm install mysql2@2.2.5
npm install express@4.17.1
npm install sequelize@5.21.7
```

## Usage 

- Install Visual Studio Code to run the application.
- Download MySQL to create a database.
- Install the aforementioned dependencies.
- Use dotenv to create environment variables and secure your database password.
- Install insomnia to create HTTP requests to the server to receive data.

## tests"

To run tests, run the following commands:

Open schema.sql in terminal
```
mysql -u root -p
source schema.sql
```

Open server.js in terminal
```
npm i
npm run seed
node server.js
```

# Demo video

[![Watch the video demo](https://img.youtube.com/vi/YOUR_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE)

You can watch a demo of the project in action by clicking the image above or [here](https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE).

## "license"> 

This project is licensed under The MIT License. Here is the link to the license to access more information for your reference: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
