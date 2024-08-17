# Handlebars Tutorial

Handlebars is a popular template engine that can be used together with Node.js to render dynamic webpages and content directly from your backend. It has a similar syntax to HTML, making it very easy to learn, read, and other stand. Another advantage of using Handlebars is that it also comes with some extra functionalities, like the ability to render content conditionally, or looping through data to render content.

In this post, we will discuss the handlebars template engine and give a practical example of how it can be used to render dynamic content directly from the backend. Throughout this guide, we will be working on a simple social media project and show you how the handlebars functionalities are used in real world settings.

## Why Should You Use Handlebars in Your Application?

Unlike HTML which can only be used to display static web content, templating engines like Handlebars enable you to deliver the files directly from the server. This means you can manipulate and edit the contents of the page before serving it to the user. Handlebars also allows you to split the contents of your webpage into multiple components, such as layout, header, navigation, sidebar and footer, and then reuse them multiple times in different pages.

## About the project

For this post, will be building a simple social media platform that allows users to create and read posts. It is a great example to showcase the abilities of the handlebars template engine, as well as things like conditionial or looped rendering.

This article will not be focusing on the business logic aspect of the application, i.e, how the backend and API works. If you need information on this, you can check out my article on [building a Blogging API](https://aribadawulo.hashnode.dev/my-altschool-blog-project-documentation) where I went into detail on APIs.

## Installing Nodejs and Setting Up A New Project

Run `node --version` in the terminal to ensure you have Nodejs installed on your system. It should return the version currently installed. If it doesn't, go to the official site and follow the steps [to download Nodejs](https://nodejs.org/en/download/)

![Node version](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p9mc2tvvqwle9tcfvcda.png align="left")

Next, run the following commands to create a folder for the application, change into the directory, and create a package.json file.

![npm init and package.json](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzx3b1e9bv29lzlznqn6.png align="left")

Since this application will use the MVC approach, your file structure should be in thsi format:

```md
├── node_modules
├── index.js
├── fakeApi.js
├── public
│ ├── css
│ ├── images
│ ├── js
├── views
├── package.json
├── package-lock.json
└── .gitignore
```

The `views` folder will contain our implementation of the handlebars templating engine.

## Configuring the server with the Express package

Next we need to configure the server for our application. To do that we will be using [express](https://www.npmjs.com/package/express), a popular Nodejs framework. Install it by running `npm install express` in the terminal. We will input the following code into our `index.js` file:

```JavaScript
// Index.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, (req, res) => {
    console.log(`Server is running on port: 3000`)
})
```

The code above imports the express package into our application and creates the `app` instance. We then establish a simple endpoint with the `get` method, and listen for any requests made to our server.

Run `node index.js` in the terminal. A message should be logged to the console, and visiting `localhost:3000` on your local browser should respond with the text: Hello World!

![Hello World! on port 3000](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z0xasnqfckezef0ts09e.png align="left")

## Adding the Handlebars template engine

Now that we have set up the express server we can now bring the handlebars package into our project.

In this article we will be using [express-handlebars](https://www.npmjs.com/package/express-handlebars). Run `npm install express-handlebars` in the terminal to install the package. Once installed we can now require it in our package:

```Javascript
const { engine } = require('express-handlebars')
```

In the code above we use the deconstructuring method to only require the handlebars `engine`, as it is the only thing we need in order to configure the template engine.

```Javascript
// Handlebars configuration

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
}))
```

Here we connect our app to the template engine using the `app.engine` method. The first argument, `hbs`, represents handlebars while the second argument represents the configuration for our template engine. We added the following configurations:

-   `extname`: The extension for handlebars files is set to `handlebars` by default, this means if you wanted to create an index file, your would name it `index.handlebars`. Now this extension name is okay but, it is a bit too long, so we can use the `extname` property to set the value to `hbs` which is much shorter.

> Note how I used `hbs` in the rest of the configuration instead of handlebars? This is because the entire server now recognizes `hbs` as the template engine, instead of `handlebars`

-   `defaultLayout`: In handlebars, there are files called layouts which serve as containers for the contents in your webpage we will discuss more on this in the next section. The `defaultLayout` sets the layout to be used by all the pages.
-   `layoutsDir`: This sets the default directory for the engine to look for it's layouts
-   `partialsDir`: This sets the default directory for the engine to look for it's partials, we will discuss more partials in the next section.

```Javascript
app.set('view engine', 'hbs')
app.set('views', './views');
```

Now that the engine has been configured, we will use the `app.set()` method to set `hbs` as the engine for the views in our server. Then we also set the folder for the views as the `./views` folder.

```Javascript
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main')
})
```

The first line specifies the folder for any public files we may want to include, like `CSS`, or`js` files.

The last line renders the the `main` file when a get request is made to the home page. Your entire `index.js` file should now look like this:

```Javascript
const express = require('express')
const fakeApi = require('./fakeApi')
const { allPosts, getPost, createPost, deletePost, updatePost } = fakeApi
const { engine } = require('express-handlebars')

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Handlebars configuration
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
}))
app.set('view engine', 'hbs')
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main')
})

app.listen(3000, (req, res) => {
    console.log(`Server is running on port: 3000`)
})
```

## Creating your first Handlebars Template

The template files in our folder will go into the `views` folder in our project. Now it is necessary to follow the right file structure if not your `views` might not work. The structure inside your views file should look like this:

```xml
├── layouts
│   ├── index.hbs
│   ├── other.hbs
├── partials
│   ├── sidebar.hbs
│   ├── post.hbs
│   ├── other.hbs
├── main.hbs
└── other.hbs
```

There are three types of handlebars files which you can find in the views; Layouts, Partials, and normal files

### Layouts

A layout file is a file that serves as a container for the contents of your application. The most common version of a layouts file is one that contains just a header and a footer.

Let us a create a layout file called `index.hbs` in the layouts folder above, then input the following code in it:

```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Handlebars app</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home
                            <span class="visually-hidden">(current)</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>

                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                </ul>

                <form class="d-flex">
                    <input class="form-control me-sm-2" type="search" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>


    <!-- Body -->
    {{{body}}}

    <!-- Footer -->
    <footer>
        <div style="position: absolute; bottom: 0; left: 10px;">
            <div class="form-group">
                <small class="form-text text-muted">SUBSCRIBE to never miss out on an update</small>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username">
                    <button class="btn btn-primary" type="button">Submit</button>
                </div>
            </div>
        </div>

        <div style="position: absolute; bottom: 0; right: 10px;">
            <ul class="pagination pagination-sm">
                <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                </li>

                <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">4</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">5</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
    </footer>

</body>
</html>
```

In this layout, we created both a header and a footer, for our home page. The triple curly braces is handlebars way of specifying where the inputted content is going to be, and in this case, it is in between the header and the footer element. The inputted content will be in the form in the next type of files we will be creating.

### Normal files

This contains the code that goes into the `{{{body}}}` section of your layouts. It contains the main content of your webpage like the cards, buttons, forms lists and so on.

Let us create a file called `main.hbs` it will contain the code for our home page:

```xml
<!-- main.hbs -->
```

We created a basic webpage, but there are still a lot of elements that are repeated, like the elements that are repeated in the code above. Teh next file we will talk about can be used to resolve this issue.

### Partials

A partial file is a single customized element, like a sidebar, a single post, or even a pop up notification. They help to decrease the amount of repeared code in your files, by creating the element, in which information can be rendered dynamically, for different purposes.

Lets create two partial views, one for sidebar and one for posts. Name the two files and `posts.hbs` respectively, the following code will go into them:

```xml
<!-- posts.hbs -->
```

In order to add this code to the main files, you would need to make use of the `include` property, this specifies where the element should go and can be used to pass in data which will be rendered in this element.

The code in your main.hbs file should now look like this:

```xml
<!-- updated main.hbs -->
```

To render this code in your webpage; run `nodemon index.js` in the terminal and go to `localhost:3000` on a browser. The contents on the page should look like this:

> image of what the styled webpage will look like

If you go into the browser control, `ctrl + shift + i`, and inspect the elements tab, you will notice that the final code in HTML does not contain any of the extra functions that we wrote in our `hbs` files. This is because the handlebars engine precompiles the `hbs` code before sending it to the browser in the form of HTML.

## Adding various functionality

You can use handlebars to loop through data and render the looped content on the frontend. Let us create a simple loop in the `main.hbs` file:

```xml
<!-- main.hbs loops -->
```

You can also use conditional statements in hbs, that is, you can render content only when a certain condition is met. Let us add a simple conditional statement in the `main.js` files

```xml
<!-- main.hbs conditionals-->
```

## Handlebars vs EJS

Embedded Template Engines(EJS) is another popular templating engine used by developers, it has a similar but more simple syntax, for instance, this is what a for loop in EJS looks like:

```xml
<!-- For loop in ejs -->
```

## Conclusion

In a normal application you would need to write javascript code for both the frontend and the backend. But with the help of template engines, you won't need to create an extra file for your javascript code as you can just write it directly.

### Somewhat important

If you are used to rendering static HTML files from the backend, or you are creating an API and don't want to spend time creating a complex UI with a frontend framework like React, then knowing how to use template engines is a great skill for you to have. I could keep on rolling out definitions and explanations about Handlebars, but it would be better to just show you how it works. To do this we will use Nodejs and Express to create a simple application, and use Handlebars for the views.
