# Altschool Blogging API

Give intro about altschool africa!!
Give intro about project!!

The task was to build a blogging API with the following functionalities:

1. Users should have their first name, last name, email, and password.
2. The user should be able to sign up and sign in to the blog app
3. Use JWT as an authentication strategy and expire the token after 1 hour
4. A blog can be in two states: draft and published
5. Logged-in and not logged in users should be able to get a list of published blogs created
6. Logged-in and not logged in users should be able to get a published blog
7. Logged-in users should be able to create a blog.
8. When a blog is created, it is in a draft state
9. The owner of the blog should be able to update the state of the blog to publish
10. The owner of the blog should be able to edit the blog in a draft or published state
11. The owner of the blog should be able to delete the blog in a draft or published state
12. The owner of the blog should be able to get a list of their blogs.
13. The endpoint should be paginated and filterable by state
14. When a single blog is requested, the API should return the user information(the author) with the blog. The read_count of the blog too should be updated by 1.

After successfully building the API we were told to document the process, which is what I will be doing in this article.

## Requirements

To understand or follow along with this article, you will need:

- Knowledge of JavaScript
- Familiarity with nodejs
- CLI experience

## Setting up a basic server

I started by creating a basic server using express and nodemon with the following steps:

Navigate to the folder where you want to build the app and run `npm init -y` in the terminal to create the package.json file, the `-y` flag is to accept all default options.

Install the required packages for the basic server by running `npm install express nodemon`in the terminal, express is for creating the server and nodemon will be used to monitor the codebase for any changes.

Create an `index.js` file and input the following code:

``` JavaScript
// Require express module
const express = require('express');

// Create an app using the express module
const app = express();

// Add a simple endpoint
app.get('/', (req, res) => {
    res.send("Hello World")
})

// Listen for requests made to the server
app.listen(4000, (req, res) => {
    console.log(`Server is running on port: 4000`)
})
```

Run `nodemon index.js` in the terminal, using nodemon automatically restarts the server whenever any changes is made to it. Open your browser and go to `localhost:4000`, you should see the text "Hello World", this means the server is functioning properly.

### MVC Pattern

For this project I made use of the MVC architecture, this divides the codebase into three parts for different purposes. MVC stands for Models, Views, and Controllers, but I did not create views for this project as we were only instructed to build an API.

## Models

Models are used to relate with the database, they help to design the structure and format of database objects by creating schemas. I created one for both the users and the articles.

### User Model

The user model contains all the required fields:

- first name
- last name
- email
- password
- articles

Create a `Models` folder and create a file called `userModel.js` inside it, then input the following:

``` JavaScript
// Require the mongoose package
const mongoose = require('mongoose');

// Instantiate the schema class from the mongoose package
const Schema = mongoose.Schema;

// Create a user schema with the mongoose schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "This email is already registered, sign in!!"],
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [5, "Password must be at least 5 characters"]
    },
    articles: {
        type: Array,
    }
}, { timestamps: true });

// Create a user model with the user schema
const User = mongoose.model('users', UserSchema);

// Export the user Schema
module.exports = User;
```

The texts in the square brackets are error messages incase certain validation is not met when filling in the fields. The `timestamps: true` is used to auto generate timestamps at the points where the object is created or updated.

### Article Model

For the article model, I created the following fields

- title
- description
- author
- state
- read_count
- read_time
- tags
- body

Create a file called `articleModels` in the Models folder and input the following code:

```JavaScript
// Require the mongoose package
const mongoose = require('mongoose');

// Instantiate the schema class from the mongoose package
const Schema = mongoose.Schema;

// Create an article schema with the mongoose schema
const articleSchema = new Schema({
    title: {
      type: String,
      required: [true, "Please provide the title"],
      unique: [true, "The title name already exists"],
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: [true, "Please provide the author"],
    },
    state: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    read_count: {
      type: Number,
      default: 0,
    },
    reading_time: {
      type: String,
      required: [true, "Please provide the reading time"],
    },
    tags: {
      type: String,
      required: [true, "Please provide the tags"],
    },
    body: {
      type: String,
      required: [true, "Please provide the body"],
    }
}, {timestamps: true});

// Create an article model with the user schema
const Article = mongoose.model('articles', articleSchema);

// Export the article model
module.exports = Article;
```

When an article is created it's state is set to "drafts" by default, this state can then be changed to "published" by the user, the read_count of an article is also initially set to Zero, extra features such as timestamps for creating and updating are auto-generated.

## Routes

Routes are also another essential part of the application, as they contain the endpoints which connects to the controllers that carry out the blog functions. Adding all the routes to the main page cab make things a little overcrowded,hence I created a "routes" folder that would contain the necessary routes.

### User routes

This file will contain all the routes for the user related functions, such as:

- /signup => For registering a user into the database
- /login => For logging in an existing user
- /logout => For logging out a user

When a certain endpoint is called it redirects the request to a controller(This is will be explained in later parts of this article). The "userRoutes" file should look something like this:

``` JavaScript
const express = require('express')
const userRouter = express.Router();

userRouter.post('/signup', () => {
  // Function for signing a new user in goes here
  res.send('Signs in a new user')
});

userRouter.post('/login', () => {
  // Function for logging a user in goes here
  res.send('Logs in an existing user')
});

userRouter.post('/logout', () => {
  // Function for logging out a user goes here
  res.send('Signs out a user')
});

module.exports = userRouter;
```

I tested the routes using postman, if the routes are functioning properly, they should send a response with the text contained in the `res.send()` function. All the endpoints in the userRoutes file are post requests as they send information to the browser.

!!!!!

### Article routes

The articleRoutes file will contain endpoints for all the required functions that can be implemented on the articles, the endpoints can be as many as the functions. The contents of the articleRoutes file is:

``` Javascript
const express = require('express')
const blogRouter = express.Router();

blogRouter.get('/signup', () => {
  // Function for signing a new user in goes here
  res.send('Signs in a new user')
});

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

blogRouter.get('/', blogController.getAllArticles); // Not secured

blogRouter.get('/user', requireAuth, blogController.getMyArticles); // Secured

blogRouter.get('/:id', blogController.getArticle); // Not secured

blogRouter.post('/', requireAuth, blogController.createArticle); // Secured

blogRouter.delete('/:id', requireAuth, blogController.deleteArticle); // Secured

blogRouter.patch('/:id', requireAuth, blogController.updateArticle); // Secured

module.exports = blogRouter;
```

First step is to create a router using the `express.router()` function, this router will contain all the necessary endpoints and functions(either callbacks or link to external controller), after this the router is exported to the index.js for usage by our server.

### Controllers

## Extra features

I added some extra features in the utils folder to handle certain errors I came across, these features could be self made functions to check the Id of the current user or libraries for things like rate-limiting and security

### Check user function

I created a function that decided the jet token an uses the I'd to search through the database for the identity of the user. For example when an article is created the function checks the user and assigns the name of the user to the author property of the new article. It can also be used to displays the name of the author if there was a user interface

## Problems I faced

### What I learnt

Visit the live [blog](liveblog.com), or check out the [GitHub repo](https://github.com/Teejay128/altschool-blog-api) to view the source code for the project.
