Handlebars is a popular template engine used together with a server-side framework, like Node.js to render dynamic content directly from the backend of an application. The templating engine also comes with additional functionalities that make it a valuable tool, such as rendering content from looped data or displaying different elements based on specific conditions.

In this post, you will learn everything about the Handlebars template engine and get a practical example of how it is used in an application. Before diving in, let's discuss the project we are going to build in this guide.

## About the project

We will build a simple social media webpage that displays things like headers and posts. This project greatly showcases the abilities of the templating engine, since you will need to manipulate the social media pages before delivering them to the frontend.

To do this we will use Nodejs and Express to create a simple application and use Handlebars for the views. You will also need to split the contents of the webpage into multiple components, like layout, navigation bar, posts, footer, messages and more, a functionality that's easily implementable with Handlebars.

## Prerequisites

-   Basic knowledge of HTML, CSS, and JavaScript
-   Nodejs and NPM installed on your system
-   An IDE to write code and a browser to view results

This article will not focus on the logic aspect of the application, i.e., how the backend and API works. If you need information on this, you can check out my article on [building a Blogging API](https://aribadawulo.hashnode.dev/my-altschool-blog-project-documentation) where I went into detail on APIs.

## Installing Nodejs and Setting Up A New Project

In a new directory, run `node --version` in the terminal to ensure you have Nodejs installed on your system. It should return the version currently installed.

> If it doesn't, go to the official site and follow the steps [to download Nodejs](https://nodejs.org/en/download/)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724880602798/d6b99860-84d7-4779-8ae4-c09f2b48f79f.png align="center")

Next, run these commands to create a folder for the application, move into the directory, and create a `package.json` file.

![npm init and package.json](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzx3b1e9bv29lzlznqn6.png align="left")

This application follows the MVC architecture, so the entire file structure will be in this format:

```md
├── node_modules
├── views
├── index.js
├── package.json
└── package-lock.json
```

The `views` folder will contain files for the implementation of the handlebars templating engine.

## Configuring the server with the Express package

Next, you will configure the server for the application with [express](https://www.npmjs.com/package/express), a popular Nodejs framework. Run `npm install express` in the terminal to install the npm package, then input the following code into the `index.js` file.

```JavaScript
// Index.js
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, (req, res) => {
    console.log(`Server is running on port: 3000`)
})
```

This code instantiates the express package in the `app` variable, configures some middlewares, registers a simple get route, and tells the server to listen on port 3000.

Run `node index.js` in the terminal and a message should be logged to the console. Visiting `localhost:3000` on your local browser should return a webpage with the text: Hello World!

![Hello World! on port 3000](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z0xasnqfckezef0ts09e.png align="left")

## Adding the Handlebars template engine

Now that you have set up the express server, it's time to add the handlebars template engine. Run `npm install express-handlebars` in the terminal to install the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package. When the package is installed add the followigng code to the `index.js` file, before the first get route.

```Javascript
// Index.js
const { engine } = require('express-handlebars')

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
}))
```

This code imports the template engine into the project and initiates it with the `app.engine` method. The first argument, `hbs`, represents handlebars, while the second argument is the engine along with its configurations.

-   `extname`: The extension for handlebar files is set to `handlebars` by default, i.e., the main file would be named `main.handlebars`. Using the `extname` configuration, the extenstion name can be set to `hbs`, a shorter variation that is more commonly used.
-   `defaultLayout`: In handlebars, layout files serve as containers for the contents of your webpage, more on this in the next session. This configuration specifies the default layout to be used `main`.
-   `layoutsDir`: This configuration tells the engine what directory/folder to access layout files.
-   `partialsDir`: This configuration tells the engine what directory to access partial files, another type of handlebars file that will be discussed in the next session.

```Javascript
//index.js
app.set('view engine', 'hbs')
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main')
})
```

With the engine configured, the code above specifies `hbs` as the view engine for your server and sets the `/views` folder as the directory for all the handlebar files.

The third line of code is to configure the folder to which public assets like, images, css, and js files, are stored. Lastly, the first get route is modified to render the `main` template.

The entire `index.js` file should now look like this:

```javascript
// index.js
const express = require("express");
const fakeApi = require("./fakeApi");
const { allPosts, getPost, createPost, deletePost, updatePost } = fakeApi;
const { engine } = require("express-handlebars");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars configuration
app.engine(
	"hbs",
	engine({
		extname: "hbs",
		defaultLayout: "main",
		layoutsDir: `${__dirname}/views/layouts`,
		partialsDir: `${__dirname}/views/partials`,
	})
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("main");
});

app.listen(3000, (req, res) => {
	console.log(`Server is running on port: 3000`);
});
```

## Creating your first Handlebars Template

With the server now successfully created, you can start adding your handlebars files to the views folder.

The template files will go into the `views` folder in our project. There are three main types of handlebar files, Layouts, Partials, and Normal files. They generally follow this structure:

```xml
├── layouts
│   ├── main.hbs
│   ├── other.hbs
├── partials
│   ├── footer.hbs
│   ├── messageBar.hbs
│   ├── navbar.hbs
│   ├── post.hbs
│   ├── other.hbs
├── home.hbs
└── other.hbs
```

Of course, the layout files go into the `layouts` subfolder, and the partial files go into the `partials` subfolder, just like was specified when configuring the engine. The normal files, however, are kept directly in the `views` folder.

Now, let's discuss these three types of files in detail.

### Layouts

Like the name suggests, a layout file serves as the layout or container for the contents of the webpage. It usually contains the standard HTML declarations, links to style sheets, and script tags.

On most websites, all the webpages share similar components, like navigation bars, footers or side bars. The only thing that differentiates the pages are the actual content. This is exactly the way layouts work, they contain the components common to all webpages and allow for the body of the page itself to be added.

Create a layout file called `main.hbs` in the layout's folder and input the following code.

```xml
<!-- home.hbs -->
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Restaurant ChatBot</title>
		<link
			rel="icon"
			type="image/x-icon"
			href="/assets/images/chatbot.jpg"
		/>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
			integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
			crossorigin="anonymous"
		/>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
		/>
		<style>
			.sticky-container {
                position: -webkit-sticky;
                position: sticky;
                top: 0;
                background-color: #f1f1f1;
                padding: 10px;
                z-index: 100;
            }
		</style>
	</head>
	<body>
		<!-- Navigation Bar -->
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-container">
			<a class="navbar-brand" href="#">Handles <small class="text-body-secondary">A social Media App</small></a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Profile</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Messages</a>
					</li>
				</ul>
			</div>
		</nav>

		<!-- Body -->
		{{{body}}}

		<!-- Footer -->
		<footer class="bg-secondary text-white text-center px-2">
			<div class="d-flex justify-content-between align-items-center">
				<div class="flex-grow-1">
					<div class="form-group">
						<small class="form-text text-muted">SUBSCRIBE to never miss out on an update</small>
						<div class="input-group mb-3">
							<input
								type="text"
								class="form-control"
								placeholder="Recipient's username"
							/>
							<button class="btn btn-primary" type="button">Submit</button>
						</div>
					</div>
				</div>

				<div class="flex-grow-1 d-flex justify-content-end">
					<ul class="pagination pagination-sm mb-0">
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
			</div>
		</footer>

		<script
			src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
			integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
			integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
			integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
			crossorigin="anonymous"
		></script>
	</body>
</html>
```

> The page is styled with bootstrap, hence the stylesheets at the top of the code, and the script tags at the bottom.

This is a simple layout, consisting of HTML declarations, a head element and a body element containing navigation bar and a footer. In the place where the actual page content is supposed to go, this is put instead: `{{{body}}}` to tells handlebar where the page content should be inputted.

As you can see, the code above is rather lengthy and hard to read or manipulate. A separate type of handlebar file called partials is used to simplify code by splitting elements into different files, kind of how components are put in separate files in frameworks like React.

### Partials

A partial file contains the code for a single element, such as a single post, a button, or an entire input form. Partials reduce the size of files to make them easily readable and allows the code to be repeated in different parts of your website.

To demonstrate how this works, let's create two partial files in the partial directory for the navigation bar,

```xml
<!-- navbar.hbs -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-container">
	<a class="navbar-brand" href="#">Handles<small class="text-body-secondary">A social Media App</small></a>
	<button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarNav"
		aria-controls="navbarNav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item active">
				<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Profile</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Messages</a>
			</li>
		</ul>
	</div>
</nav>
```

and the page footer.

```xml
<!-- footer.hbs -->
<footer class="bg-secondary text-white text-center px-2">
	<div class="d-flex justify-content-between align-items-center">
		<div class="flex-grow-1">
			<div class="form-group">
				<small class="form-text text-muted">SUBSCRIBE to never miss out on an update</small>
				<div class="input-group mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Recipient's username"
					/>
					<button class="btn btn-primary" type="button">Submit</button>
				</div>
			</div>
		</div>

		<div class="flex-grow-1 d-flex justify-content-end">
			<ul class="pagination pagination-sm mb-0">
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
	</div>
</footer>
```

Now, instead of writing the code for the elements in full, you can just use this syntax instead: `{{> fileName }}`. With this, Handlebars inserts the code in the specified file where this syntax is used. Partials can also do a lot more, but we will discuss that later. We can now modify our main main.hbs file to look like this.

```xml
<!-- main.hbs -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Restaurant ChatBot</title>
		<link
			rel="icon"
			type="image/x-icon"
			href="/assets/images/chatbot.jpg"
		/>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
			integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
			crossorigin="anonymous"
		/>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
		>
		<style>
			.sticky-container {
				position: -webkit-sticky;
				position: sticky;
				top: 0;
				background-color: #f1f1f1;
				padding: 10px;
				z-index: 100;
			}
		</style>
	</head>
	<body>
		<!-- Navigation Bar -->
		{{> navbar }}

		<!-- Body -->
		{{{body}}}

		<!-- Footer -->
		{{> footer }}

		<script
			src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
			integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
			integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
			integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
			crossorigin="anonymous"
		></script>
	</body>
</html>
```

This code is much more readable, and now, if you need to make any changes to the element you can just go into their files and manipulate the code, and the changes would be applied to anywhere the partial is used.

Currently, layouts and partials cannot be rendered directly, you would need another type of Handlebars file, a normal file, to make use of them.

### Normal files

The code written in normal files is what goes into the `{{{body}}}` section in your layout files. This is where you write the main content of your webpage, like cards, buttons, forms, lists and so on. Let's create a `home.hbs` file, and input the following code:

```xml
<!-- home.hbs -->
<div class="container">
	<p>Welcome to the social media app called, Handles. Get it? Because I created it with Handlebars :)</p>
	<p>Today's date is 2024-08-27 and it is currently 18:41:28</p>
</div>
```

In our `index.js` file, the code that runs when you make a get request to the "/" route, renders the code we wrote above. And since we specified "main" as our default layout, the `main.hbs file` is used. Run `node index.js` in the terminal, and visit `localhost:3000` on your browser to see the results.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1724881426763/4ba31fc7-22a7-405c-875f-e50559de401c.png align="center")

> Pardon the Tacky page design, I am a backend designer because I struggle with CSS

Notice how the nav bar, the footer and everything else is included in the picture. If you inspect the webpage (right click, then click on "Inspect"), you will observe that the code in the elements tab contains all the final code for the browser. This happens because the handlebars engine precompiles the entire code into actual HTML before rendering it.

## Handlebars Distinct Features and Functionalities

Congratulations on creating your first Handlebars webpage. However, most of what we have done so far can be accomplished with basic HTML. If you really want to fully utilize Handlebars, then you will have to use some of its extra functionalities. Let's see this functionality in action.

### Using Server-Side Variables

We have gone on and on about how Handlebars renders dynamic content, well, using variables is one of the ways to do this. Rather than render static HTML over and over again, you could render page content directly from a variable in your backend. Let's add some code to our `index.js` file, right before the routes.

```js
// index.js
const introMessage =
	"Welcome to the social media app called, Handles. Get it? Because I created it with Handlebars :)";

const dateString = new Date().toISOString();
// console.log(dateString);
const date = dateString.split("T")[0];
const time = dateString.split("T")[1].slice(0, 8);

app.get("/", (req, res) => {
	res.render("home", { introMessage, date, time });
});
```

The first variable contains the welcome message we originally hardcoded onto the webpage. The other variables just contain the current date and time (at GMT). You can log the `dateString` variable to the console to see how it looks.

The other change we made was with the `res.render` method, we passed in a second argument which is an object containing all the variables we just created, transferring them into the `home.hbs` file. Here is how to use the variables in the file.

```xml
<!-- home.hbs -->
<div class="container">
    <p>{{introMessage}}</p>
    <p>Today's date is {{date}} and it is currently {{time}}</p>
<div class="container">
```

The syntax for using variables in Handlebars is double curly braces, this way, the engine knows where to input the value of the variables. Now, if you load the webpage in your browser, you will see the intro message and the date and time.

> We like to add some whitespace to make it look nicer, but using `{{introMessage}}` is also fine.

It is also possible to pass in variables in partials. The syntax for that is `{{> partial variable="Hello World!"}}`

### Conditionally Rendering Content

With Handlebars, it is possible to render content only under certain conditions. For example, let's say you wanted to display different information depending on whether a user is logged in or not.

```js
// index.js
const isLoggedIn = true;

app.get("/", (req, res) => {
	res.render("home", { introMessage, date, time, isLoggedIn });
});
```

Here, we created an `isLoggedIn` variable with the value of true and passed it into the `home.hbs` file. In a practical use case, this value will depend on some authentication that you implemented, but for practice reasons, we can just hard code it.

```xml
<!-- home.hbs -->
{{#if isLoggedIn}}
	<p>You are logged in</p>
	<button>Logout</button>
{{else}}
	<p>You are not logged in</p>
	<button>Login</button>
{{/if}}
```

This is the standard if-else syntax for a conditional in handlebars. `#if <condition>` starts the conditional rendering, `else` is for the else statement, and `/if` ends it. Handlebars of version 3.0.0 and higher also supports the `else if` syntax, used before the `else` statement, in case of multiple-way conditionals.

Since the `isLoggedIn` variable is set to true, a "You are logged in" message along with a button to Logout would be displayed. If the variable is set to false, content after the else tag would be rendered instead.

### Looping Through Data

The third functionality we will discuss is Handlebar's ability to iterate over data and render content. This is basically just looping through a list of items and rendering an element that is based on each item.

In our social media app, we will use this feature to loop through the available posts and display each on the user's feed. In a real-world application, this data comes from a database, but once again, we will have to hard code it.

```javascript
// index.js
const posts = [
	{
		name: "Elon Musk",
		content:
			"I think I have to admit that the social media platform, Handles, is better than X. I mean, it was even built using handlebars.",
		comments: [
			"No you won't",
			"You can't do that",
			"That's impossible",
			"Be realistic bro",
		],
		buttons: {
			likes: 940,
			comments: 4,
			reposts: 200,
		},
		time: "12:06",
	},
	{
		name: "MKBHD",
		content:
			"This might just be the best phone ever, it has a 360 hertz screen refresh rate, a 1000 megapixel camera, and a 10,000 mAh battery",
		buttons: {
			likes: 860,
			comments: 2,
			reposts: 220,
		},
		comments: [
			"Wow, those are some crazy specs",
			"Is it better than the iPhone 20 Pro Max tho?",
		],
		time: "21:56",
	},
	{
		name: "Joseph Taiwo",
		content:
			"I am writing an article on the Handlebars templating engine, please leave a comment if you have any questions you'd like me to answer.",
		buttons: {
			likes: 22,
			comments: 3,
			reposts: 14,
		},
		comments: [
			"What can I do with Handlebars?",
			"Isn't it better to just use standard HTML or React",
			"Good work bro, I'd like to read it when it comes out",
		],
		time: "17:32",
	},
];

app.get("/", (req, res) => {
	res.render("home", {
		introMessage,
		date,
		time,
		isLoggedIn,
		posts,
	});
});
```

The `post` variable is an array of objects with name, content, buttons, comments, and time properties. It has also been added into the object so it can be accessed from the `home.hbs` file.

```xml
<!-- home.hbs -->
<div class="col-sm-8">
	<h2>Posts</h2>
	{{#each posts as |post|}}

		<h2>{{post.name}}</h2>
		<p>{{post.content}}</p>

	{{/each}}
</div>
```

The `#each items as |item|` keyword signifies the beginning of the loop, while the `/each` keyword ends it. This means any code between the two lines will be rendered for each iteration of the loop. The variable in the pipe represents each item in the data being looped through.

Since each item is an object, it can then be used to get properties such as name (post.name) or content (post.content). We could also use a partial instead of writing normal code and pass the item into a different variable so it can be referenced in the partial.

```xml
<!-- home.hbs -->
{{#each posts as |post|}}

{{> postCard data=post }}

{{/each}}
```

This is the code for the postCard partial we used above. The code should go into a file named `postCard.hbs` in the partials folder.

```xml
<!-- postCard.hbs -->

<div class="bg-light p-2 my-2 border rounded border-secondary">
	<div class="post-header row" style="font-size: 2em;">
		<i class="bi bi-person-circle col-sm-3"></i>
		<span class="user-name col-sm">{{data.name}}</span>
	</div>

	<div class="post-content">
		<div class="card">
			<div class="card-body">
				<p class="card-text">{{data.content}}</p>
				<small class="card-subtitle">Posted at <span class="text-info">{{data.time}}</span></small>
			</div>
		</div>

		<div class="input-group mb-3">
			<span class="input-group-text"><i class="bi bi-chat-fill"></i></span>
			<input
				type="text"
				class="form-control"
				aria-label="Amount (to the nearest dollar)"
			/>

			<div class="border">
				<button class="btn"><i class="bi bi-hand-thumbs-up-fill"></i>{{data.buttons.likes}}</button>
				<button class="btn"><i class="bi bi-chat-fill"></i>{{data.buttons.likes}}</button>
				<button class="btn"><i class="bi bi-share-fill"></i>{{data.buttons.likes}}</button>
			</div>
		</div>
	</div>

	<div class="post-footer">
		<ul class="list-group">
			{{#each data.comments as |comment|}}
				<li class="list-group-item">{{comment}}</li>
			{{/each}}
		</ul>
	</div>
</div>
```

### Helpers for Personalized Functions

Handlebars supports common basic functions, like looping and conditionals, however, most applications will need additional to carry out specific tasks. Helpers provide a way to customize functions to carry out different tasks from manipulating content to rendering data of their own.

There are two main ways to register helpers in your Handlebars application:

1. #### During Configuration:

    You can pass in helpers as a parameter while configuring the handlebars engine.

    ```js
    // index.js
    app.engine(
    	"hbs",
    	engine({
    		layoutsDir: `${__dirname}/views/layouts`,
    		extname: "hbs",
    		defaultLayout: "main",
    		partialsDir: `${__dirname}/views/partials`,
    		helpers: {
    			shout(text) {
    				return text.toUpperCase();
    			},
    			randomNumber() {
    				const number = Math.floor(Math.random() * 100);
    				return number;
    			},
    		},
    	})
    );
    ```

    We created two custom helpers here. `shout` takes in text as a parameter and capitalizes all the letters, while `randomNumber` generates a random number. The syntax for using a helper entails simply writing the name, and if it has an argument, you put it right in front of it.

    ```xml
    <!-- home.hbs -->
    <p>{{shout "Hello World"}}</p><!-- HELLO WORLD -->
    <p>Today's lucky number is {{randomNumber}}</p> <!-- Today's lucky number is ## -->
    ```

2. #### During Rendering:

    Helpers can also be passed in as an additional argument when rendering a template.

    ```js
    // index.js
    app.get("/", (req, res) => {
    	res.render("home", {
    		introMessage,
    		date,
    		time,
    		isLoggedIn,
    		posts,
    		messages,
    		helpers: {
    			shout(text) {
    				return text + "!";
    			},
    			getDate() {
    				const dateString = new Date().toISOString();
    				const date = dateString.split("T")[0];
    				return `Today's date is ${date}.`;
    			},
    		},
    	});
    });
    ```

    Note that if a helper of the same name is declared with this option, it overwrites the original helper. So here, the shout helper only adds an exclamation mark instead of capitalizing all the letters.

    ```xml
    <!-- home.hbs -->
    {{shout "Hello World"}} <!-- Hello World! -->
    {{getDate}} <!-- Today's date is YYYY-DD-MM.
    ```

> There are of course a ton of other functionalities that will not be discussed in this article. However, you can check out the [npm documentation](https://www.npmjs.com/package/express-handlebars) for more info about them.

## Conclusion

Handlebars is best if are creating an API and don't want to spend time creating a complex UI with a frontend framework like React, then knowing how to use template engines is a great skill for you to have.

We explored how you can configure Express to use Handlebars as it's viewing engine, how to create handlebars files, and its various functionalities, such as variables, looping, conditionals, and custom helpers. We also built a social media webpage. You can access the code on this [GitHub repo](https://github.com/Teejay128/Technical-Writing-Stuff/).

---

Thank you for taking the time to complete this long read. If you have any questions feel free to leave a comment. You can also contact me through the socials in my profile.
