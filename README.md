# hdfc-api
Hosted api on heroku - https://hdfc-api.herokuapp.com/api/v1/movies

# Project structure and small overview
This is movie ticket booking api, where user can search or view all city, cinemas, or movies accordingly and book the tickets. 
I'm following MVC architectural pattern, that separates an application into three main logical components ie. Module, View and Control. 
This project is JWT, json web token for authorization, bcrypt module for encoding the user password, multiple security/network packages.
Custom error handling, error first callback pattern, middleware, best folder structure and file structure and much more...

# Project Setup
Download or clone this repository.

You will get all the folder and files - controllers, modules, db ...etc

# Installing dependencies
Open up the command prompt and do npm install, it will install all the dependencies used in project.
Open package.json and look for scripts object. Here are two properties "start" which is used for production environment and "dev" which we are using for development environment.

# .env file Setup
After downloading the project, there's a file name env_example. This file contains all the environment variables which will be easy to setup the .env file.
env_example also containes all the steps how to setup the .env file. Just create .env file and copy all the variables and just replace databse credentials. Rest can be kept same.

# starting the server
# npm run dev
After instaling dependencies, hit npm run dev in command prompt. Server will start on port 7766 if port number is not changed.

Open your api testing software and paste http://localhost:7766/ or according to your port. If you get a simple response "Task api", congratulations our api is running fine.

# app.js
Important file app.js: Open up app.js file and you can see all the imported modules, security packages, files, routing and database. I have commented and explained all roles and use cases of lines or code i am using in app.js
