<!-- Title -->
# Selecting HTML elements with  CSS simple selectors

<!-- Introduction -->
## Introduction
HyperText Markup Language(HTML)
: HTML is the standard markup language used in documents that are designed to be displayed on webpages, it helps to define the various elements used on the webpage and to create a basic layout of what the webpage would look like.
<!-- Image of HTML code -->
![What HTML code looks like](HTML.png)

HTML on its own doesn't look all that good as it only contains some default styling for its elements.

<!-- Image: What the HTML elements in a webpage look like -->
![What a webpage with only HTML loolks like]()

Cascading Style Sheets or CSS is a style sheet language used for describing the presentation of HTML elements in the webpage. Essentially, it is used to add better styling to HTML elements.

When styling HTML elements with CSS, you would need a way to select which element is to have which property. 

CSS selectors are used for selecting elements to which styles can then be added. There are many different types of CSS selectors, but in this article, we will only deal with simple selectors. 


<!-- Headings -->
## Simple Selectors
Simple selectors are methods of selecting HTML elements with names used to declare them. These names could be:

- Tag names
- ID names
- Class names

## Selecting HTML elements by their tag names

HTML tag names are pieces of markup language inserted at the beginning and end of HTML elements when declaring them.


As shown in the code snippet below, `h1` tags are used to define first headers, while `p` tags define paragraphs and other tags are used to define other elements.

<!-- Image: Creating various HTML elements -->
    <h1>Header One</h1>

    <div>
        <h2>Header Two</h2>
        <p>Paragraph</p>

        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
            <li>List item 4</li>
        </ul>
    </div>

Selecting elements like this involves writing the tag name followed by a parenthesis that contains the styling.

<!-- Image: Styling the various elements created above -->
    h1{
        color: red;
    }
    div{
        background-color: blue;
    }
    li{
        background-color: cyan;
    }

Selecting elements like this is simple and direct, but this styles all elements with that tag name, it is pretty useful when you are defining the styles all elements with a particular tag should have, but what if you just wanted to style a particular `p` element differently, or you wanted to add a different styling to a `li` (list-item) element. Styling specific elements like this can be achieved with IDs and Classes.

<!-- Image: result of the above styling!!!!!! -->
![Result of styling tag names](tagname.png)

## Selecting HTML elements by their IDs

IDs are unique identifiers for a particular HTML element.

IDs are assigned when declaring the HTML elements, IDs can be anything, but they must not start with a number and must not include spaces. Rather than spaces make use of hyphens (-)
<!-- Image: Adding IDs to some HTML elements -->
    <h1>Header One</h1>

    <div>
        <h2 id="second-header">Header Two</h2>
        <p>Paragraph</p>

        <ul>
            <li id="first-item">List item 1</li>
            <li>List item 2</li>
            <li id="list-item-3">List item 3</li>
            <li>List item 4</li>
        </ul>
    </div>

When selecting HTML elements by their IDs, a hashtag `#` before the ID name is used to select elements with that ID name.

<!-- Image: styling a particular element with it's ID -->
    #header-2{
        background-color: black;
        color: red;
    }
    #first-item{
        background-color: green;
        padding: 5px;
        color: white;
    }
    #list-item-3{
        margin: 10px;
        color: red;
    }

>It is advisable not to give the same ID name to different elements, this is because IDs are meant to be unique.
>When selecting multiple elements, classes should be used instead.

<!-- Image: Result of the above styling -->
![Result of styling with IDs](ID.png)




## Selecting HTML elements with classes 

Class names are non-unique identifiers as they can be added to multiple elements.

Classes are also assigned on declaration, and they must not start in with a number or contain spaces. Unlike IDs, a single class can be assigned to multiple elements.

<!-- Image: Adding a class to several HTML elements -->
    <h1 class="red-cursive">Header One</h1>

    <div>
        <h2 class="code-like">Header Two</h2>
        <p class="red-cursive">Paragraph</p>

        <ul>
            <li class="red-cursive">List item 1</li>
            <li class="red-cursive">List item 2</li>
            <li>List item 3</li>
            <li class="code-like">List item 4</li>
        </ul>
    </div>

When selecting HTML elements with their class name, a dot `.` before the class name shows that the styling is for all elements with that class name.
<!-- Image: Styling multiple HTML elements by adding styles to their classname -->
    .red-cursive{
        color: red;
        font-family: cursive;
    }

    .code-like{
        font-family: monospace;
        background-color: black;
        color: white;
        padding: 5px;
    }

Think of this as adding the various elements to a particular class, all elements in the class receive the styling that is added to that class.
<!-- Image: all element with that class have that styling -->
![Result of styling with class](class.png)

## Extras
### Universal selector

The universal selector selects all HTML elements in a document. The asterisk `*` is used to call on the universal selector, once called it affects every element in the webpage. 
<!-- Image adding properties to the universal selector -->
    *{
        background-color: black;
        color: yellow;
    }

Styling with the universal selector is of course not advised as it gives all the elements in your webpage the same styling and this can result in your webpage looking quite bland
<!-- Image: result of the above styling with the universal selector -->
![Result of styling with universal selector](universal.png)

Although some properties are best defined with the universal selector. An example is `font-family` styling, it is used to set the type of font you want in your webpage, adding it as a style in the universal selector ensures that all elements in your webpage have that particular font.

Another popular use case is for setting the default padding and margin of all elements to 0. Working with the default padding and margin can sometimes lead to miscalculations, most developers often make use of the universal selector to set those values to zero.

<!-- Image: before padding and margin is set to 0 -->
![Resul of setting padding and margin to 0](universal-2.png)

Resetting the default padding and margin of all elements helps when styling the elements as you get to style the margin and padding rather than add to the default values.

<!-- Image: after padding and margin is set to 0 -->

### Group selectors

Group selectors or selectors list is a means of selecting multiple elements and assigning the same style to them.
<!-- Image: HTML for selectors list -->
    <h1>Header One</h1>

    <div>
        <h2>Header Two</h2>
        <p id="paragraph">Paragraph</p>

        <ul>
            <li>List item 1</li>
            <li class="marked-item">List item 2</li>
            <li>List item 3</li>
            <li class="marked-item">List item 4</li>
        </ul>
    </div>

 This involves creating a list of selectors separated by a comma `,`.

<!-- Image: A selectors list -->
    h1, #paragraph, .marked-item{
        background-color: gray;
        color: green;
        padding: 10px;
    }

Any type of selector is allowed in the selectors list, it could be Tag, Class or ID selectors.
 <!-- Image: result of selectors list -->
![Result of styling with selectors list]()

> Note: If there is any invalid selector in the selectors list, the styling for all other selectors in the selectors list will be ignored.

<!-- Conclusion -->
And that's all the simple selectors, if you are wondering why they are called simple selectors, well its probably because of the "not so simple selectors" like:

- Combinators
- Attribute Selectors
- Pseudo selectors

But with enough practice and determination you will come to find these "not so simple" CSS selectors to actually be simple.

Designing webpages can be really challenging, so learning how to properly select HTML elements can be a useful skill along the line.

If you would like to read more on CSS selectors checkout, [w3schools](https://www.w3schools.com/css/css_selectors.asp) and [MDN web docs]()

Many thanks for reading upto this point, if you enjoyed this article, make sure to leave a like and share with friends, I guess.

And if you didn't, cut me some slack alright, it's my first article ever. Also if I made any errors feel free to drop a correction in the comment section. :heart: