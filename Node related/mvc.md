# MVC architecture in NodeJs

MVC architecture is a method of app development that aims to reduce code complexity by dividing the codebase into 3 distince parts: Models for interacting with the database, Views for managing user interface and Controllers for handling buisness logic.

In this article we will discuss the MVC architecture in NodeJs by structuring a simple application, !!!!!!!

## Introduction

A simple application can be divided into 3 distinct parts;

- The user Interface
- The buisness logic
- The database

When building an application, dividing your codebase helps to group together certain parts that function together, this makes maintaining and !!!!!!, much easier. It also makes your code easily understandable by your coworkers or friends.

Although this style of programming is familiar!!!!! to developers in programming languages like C#, Ruby and some PHP frameworks, the use MVC architecture can be used to replicate!!! this form of coding in Nodejs, which is a javascript runtime enviroment.

Let us discuss MVC and what these distinct parts stand for

## Models

The "M" in MVC stands for models. Models are !!!!!! for interacting with a database, they do this by defining the format of items in your database. You can create separate models for separate objects in your database using a Schema!!!!.

## Views

This is the "V" in MVC, it is used to represent the portion of the code base that the user interacts with i.e, it is the user interface which is "viewed" by the user.

## Controllers

Controllers contain the !!!!logic portion of a project, this is the part that contains the actions that receive data from the database, via the models, process this data and relay information to the user via the views.

## Other key aspects of this form of coding include

### Routes

### Utilities

So on and so fort

To learn!!! more on the MVC architecture, let us build a simple Nodejs app, that does.......!!!!1

In order to proceed you would need to have:

- Nodejs installed on your system
- A MongoDb database either local or cloud
- Knowledge of javascript
- An open code editor, e.g VScode
