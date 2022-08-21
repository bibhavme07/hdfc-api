# hdfc-api
Hosted api on heroku - https://hdfc-api.herokuapp.com/api/v1/movies

# Project structure and small overview
This is movie ticket booking api, where user can search or view all city, cinemas, or movies accordingly and book the tickets. 
I'm following MVC architectural pattern, that separates an application into three main logical components ie. Module, View and Control. 
This project is JWT, json web token for authorization, bcrypt module for encoding the user password, multiple security/network packages.
Custom error handling as well as 3rd party package usage for handling error, error first callback pattern, middleware, best folder structure and file structure and much more.

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

# Using our hosted api
# using auth api for sign-up and log-in
1: User sign-up https://hdfc-api.herokuapp.com/api/auth/register
-> {
  "name" : "example",
  "email" : "example@gmail.com",
  "password" : "123456",
  "repeat_password" : "123456"
}

Hit the api after filling all the details (json format) on https://hdfc-api.herokuapp.com/api/auth/register using post method. In return you'll get the details as well as json web token according to user that will use latter. In backend i am encrypting user password and saving the user. If there is any error in the fields or some fields are missing it will msg of error details.


2: User login https://hdfc-api.herokuapp.com/api/v1/auth/login
-> {
    "email" : "exampl@gmail.com",
    "password" : "123456"
 }
 
Logging in user on based of input data. In backend I am first finding the user on based of email, if user avaliable then decoding the password and comparing it and moving forward by returing the user and json web token or simply returing message of wrong credentials.

# Using movies api
1: Get all movies
-> https://hdfc-api.herokuapp.com/api/v1/movies , here api in the link is normal coding convention fors api's, v1 means version 1.

2: 



