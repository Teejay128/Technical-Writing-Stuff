# Getting to know local storage by building a Book Lister

Data has become a necessary component of every basic application, hence we need to have efficient storage systems which can store data known as databases. But in the case where you might want to build a simple application, using a database might be a little overkill.

In this case you might want to make use of your browsers local storage, as it is capable of handling the 4 basic database functions, namely:

1. Create
2. Read
3. Update
4. Delete

Hey there :wave:, in this article we will discuss local storage and how you can use it you in your simple application, we will also create a simple booklister using the knowledge we will learn in this article. Enjoy :heart:

<!--  -->

web apps process data
Need a way to store the data
You could use an entire database
Or you could use local storage

## Introduction

Hey there, in this article we will discuss Local storage

## Local

Only stores 5mb which is more than enough,

## Methods

Get
Set
Delete
Clear

## Building a booklister

A Booklister is a simple app that stores a list of the users books, it is a relatively lightweight application, so we can use local storage to store the books. Here is how the application works:

- Fill in details about the book, like Title, Author and Description

- Add the book to local storage

- You can also remove a book from local storage

- Obtain the books from the local storage and display it in a table

- Even if the page is refreshed books will still remain

This is the link to the repository that contains the entire code for the app.

### HTML & CSS

This article will not cover the HTML and CSS, but there are 2 key features to include in the booklister app:

1. ### Form

    This contains the input fields, that the user uses to fill add details about the book. It contains 4 parts

    - Title input field: For collecting the Title of the book

    - Author input field: For collecting the Author of the book

    - Description textarea: For collecting a short description about the book

    - Submit button: For adding the book to local storage

2. ### Table

    This contains the table where all books in the local storage are displayed, it contains:

    - Table head: Contains four colums for Title, Author, Description and an empty one for delete buttons

    - Table body: This is left empty as it will be populated with books directly from the database.

The entire HTML code should look like this:

``` HTML
    <HTML CODE>
```

I used an external CSS library called Bootstrap to style the booklister, but you can use any styling you want. This is how you link the bootstrap to your HTML

``` HTML
    <link rel="stylesheet" href="bootstrap.min.css">
```

### Javascript

- ### Step 1

    Selecting elements: Use the javascript `querySelector` method to select the required elements from the HTML document.

    ``` JavaScript
        const title = document.querySelector("#title")
        const author = document.querySelector("#author")
        const description = document.querySelector("#description")

        const form = document.querySelector("form")
        const tableBody = document.querySelector('tbody')
    ```

    Access the HTML by using the keyword `document`, which refers to the entire HTML, get the targeted element by adding the selector `#title`, which refers to the element with an ID of "title", into the `querySelector`. Then assign it to a variable "title" for easier future reference.

    > Do the same for the Author, Description, Form and Table body.

- ### Step 2

    Add event listeners: Event listeners trigger functions when a certain event occurs

    ```JavaScript
        form.addEventListener('submit', addBook)
        document.addEventListener('click', removeBook)
    ```

    Add the "submit" event listener to the form, so that when the form is submitted, it will trigger the `addBook` function which will be implemented later on. The second event listens for a click on any part of the document and triggers the `removeBook` function, I will explain more about this function later on.

- ### Step 3

    Functions: There are 4 functions included in this simple book lister namely:

  - The `addBook` function:

    ``` JavaScript
        function addBook(e){
            // Prevent function from submitting
            e.preventDefault()
            
            // validation to check if form fields are empty
            if(title.value == "" || author.value == "" || description.value == ""){
                alert("Please fill in all the required fields")

            } else {

                // Creating a book object with the required values
                const Book = {
                    title: title.value,
                    author: author.value,
                    description: description.value
                }
                
                // Adding the book object to the local storage
                const books = JSON.parse(localStorage.getItem('books'))
                books.push(Book)
                localStorage.setItem("books", JSON.stringify(books))
                
                // Resetting the values of the input fields
                title.value = ""
                author.value = ""
                description.value = ""
            }

            // Function to display book
            displayBooks()
        }
    ```

    The `addBook` function is triggered by clicking the "Add Book" button, an argument "e", which stands for "event", is passed into the function as an argument. When a form is submitted it sends the details contained in the input to the backend for processing, but in this case we do not want that, so we use the `e.preventDefault` function to prevent the default action(submitting the form) from happening.

    Check if any of the input fields are empty, and alert the user if there is at least one empty field,  before carrying out the rest of the function.

    Create a book object that will contain the details for the book, this makes storing the book's data in the local storage easier.

    We will assume that there are already books in the local storage

## Extras

Advantages of local storage

Disadvantages of Local storage

- Security issues

Local storage vs session storage

## Conclusion

Thanks and appreciation
