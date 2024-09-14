# Selecting HTML elements with CSS
<!-- ### About this article
In this article we will discuss CSS selectors, Pseudo classes, and the basics of selecting HTML elements

### Reason for writing this article
As a novice to web development, styling HTML elements with CSS can be a bit tricky, especially when you are just starting and dont know your way around.

One of the problemms you might encounter, may be the inability to select the right elements to style -->
## CSS selectors
CSS selectors can be grouped into five different categories

1. Simple selectors: Select elements by their tagname, idname or classname.

2. Attribute selectors

3. Combinator selectors: Select elements based on the relationship shared between 2 elements

4. Pseudo Selectors: Pseudo selectors come in 2 types
    - Pseudo class selectors: selects elements based on the state their in
    - Pseudo element selectors: selects a part of an element



## Introduction

<!-- ### HTML is the skeleton of webpages -->
HTML(Hyper Text Markup Language) is the the basic format for elements on webpages. It contains some default styling which is not really appealing to the eye.

<!-- ### CSS is used to style HTML elements -->
CSS(Cascading Style Sheets) is used to style HTML documents to improve their looks. It can add properties like `background-color`, `height`, `width`, `margin` and `padding` to HTML elements.

<!-- ### But first the html elements have to be selected -->
Styling HTML elements with CSS involves selecting the elements to be styled and adding the required properties to them.

<!-- An image: styling a random element -->
<!-- ### Requirements
To follow along with this article, you would need a basic kon -->


## Methods
There are three ways to select HTML elements, they include :
<!-- Css universal selector (*) -->
* Elements

* Classes

* IDs

* Attributes

### Tags
Selecting elements by tagname.

Tagnames include `h1`, `p`, `div`, `span`, etc...

For instance
<!-- An image: Setting all p tags to have a bg color of red -->
Result:
<!-- An image: All p tags in the element have a red bg color-->

Styling elements with Tagnames directly affects all elements with that tagname.

In the example above all elements with the `p` tag have their background colors set to red, while all the other elements are unaffected.

Styling like this is not advisable, because you may not want to add that particular style to all elements all of that type your p as it affects all the elements with that tagname, it should only be used to create something like a default for styling,and additional styling should be added using Classes and IDs

And lets say you want to select specific tags not element wise, thats were classes and IDs ccome in


### Classes
Selecting elements by class

Classnames can be anything, but must not start with a number, you just have to assign that class to the element.

For instance:
<!-- An image: Adding a class of "green-highlight" to several elements -->
In CSS the dot " . " is used to denote classes. That is `.green-highlight` refers to elements with a classname of "green-highlight".

Result :
<!-- An image: All elements with a class of "green-highlight" should have a green bg color -->

Notice that all elements with the classname "green-highlight" have a green background, irrespective of their tags or default element styling.
The class styling overwites the default styling for the elements.

As the name suggests classes are used for selecting multiple elements. For adding styles to a specific element, IDs are used.


### IDs
Selecting elements by ID

Like classnames, IDs can be anything you set them to, but they mustn't start with a number, you just to have assign that ID to the element.

For Instance:
<!-- An image: Addig an ID of "blue-highlight" to a particular element -->
In CSS the " # " symbol is used to denote IDs. That is `#blue-highlight` refers to the elements with the ID of "blue-highlight".

Result :
<!-- An image: The element with the ID of "blue-highlight" should have a blue bg color -->

The element with the ID "blue-highlight" has a blue background, The ID styling overwrites all other stylings for the element. It does this because it has a higher specificity. Specificity is beyond the scope of this article, But all you need to know is that, "The styling with the highest specificity overwrites all the other stylings.


## Attributes
Other than Classes and IDs CSS elements can also be styled by selecting attributes specific to them.  

For instance: 
<!-- An image: adding styles to a[target] and input[type = "submit"] -->
When styling with attributes, the format: element[attribute] or element[attribute = "value"] is used.

Result :
<!-- An image: all anchor tags with a target value and all input tags with a type of submit is styled -->
All anchor tags with a target attribute are styled regardless of the value, while only the input tags with a type of submit are styled.

Attribute selectors also work with classes, 
For instance : 
<!-- An image: Adding styles to an element with a class of "dark-border" -->
When a class is selected in this way  the class is treated as an attribute, hence the result.

Result :
<!-- An image: element with class of dark-border has a dark border -->



<!-- Explainn CSS combiators like a family tree -->
## Combinators

Combinators are used to define relationships between two elements.

Css selectors can make use of multiple selectors, combinators can be included between these selectors,

There are 4 css selectors:

1. Descendant selector (" ")
2. Child selector (">")
3. Adjacent sibling selector ("+")
4. General sibling selector ("~")

### Descendant Selectors

Descendant selectors make use of a space between the two elements (" ") are used to select all elements that are a descendant of a particular element.

For instance:
<!-- An image: set div "space" p to a text color of red -->
The element before the space is the parent while the element after the space is the descendant

Note: other forms of selcting can be used, not just elements, i.e `.shoplist li` will refer to all li elements that are a descendant of the element with a class of "shoplist"

Result : 
<!-- An image: all p descendants of the div element have a red text color -->
Notice that it is all the p elements under the div that are assigned that property even though they are children of other elements. This because the descendant selector selects all the descendants be it a child of that element or a child of a child (grandchild) of that element.

### Child Selectors

Child selectors represented by the right angle bracket (">"), are used to select all elements that are a direct child of a particular element.

For instance:
<!-- An image: set div > p to a bgcolor of blue -->
The first element is referred to as the parent element while the second element is the child element

Result :
<!-- An image: only p elements that are a direct child of the div element are selected -->
In this case only the children are selected, it does not affect grand children or further descendants. 


### Adjacent Sibling Selectors

Adjacent sibling selectors denoted by the plus sign ("+") are used to select the very first sibling that satisfies the selected element.

For instance: 
<!-- An image: set h2 + p to have a green bg color -->
Note that for this to work both elements must have the same parent element

Result :
<!-- An image: only the very first p sibling is selected even though there is a div tag betwee them -->

Notice that the div element thay is between the h2 element and the p element does not get selected and all other p elements after the first do not receieve the green styling.

### General Sibling Selector

General sibling selectors selects all elements of the specified type that are siblings of the selected element.

For instance: 
<!-- An image: set h1 ~ div to have red text color -->
Unlike the Adjacent selector it not only styles the first match, it selects all existing matches of the specified element.

Result : 
<!-- An image: all sibling elements except the targeted one is styled -->
As this selects all sibling div elements, all other elements remain unaffected. 

## Extras


### Pseudo classes
### Pseudo elements

## Tips

### Highlighting to know which element is currently selected
Sometimes you might experience some difficulties selecting the right elements, one of the tricks that has helped me is adding a background color property to the style.

For instance I am trying to style a particular element, but i am not sure if i have selected the right element. I add a background color property if red to the element so as to highlight the element that the particular styling is targeting.

### Using browser dev tools to map elements
If you have a problem selecting a particular element, you could go to your browser and open devtools(right-clicking and pressing inspect, pressing f12, or pressing ctrl + shift + i).
<!-- An image: opening dev tools -->
In the element section, you will see the html code for your webpage, hovering over a particular element on the screen will highlight the element which is being hovered over.
<!-- An image: hovering over HTML elements -->
<!-- ### Using standard formats? (header, footer, articles, nav, etc)
### Box model for padding and margin -->


## Conclusion

### Drop more suggestions in the comments
I am still a beginner to web development, and even experts in the feild still learn new things, so if there are any errors or mistakes feel free to correct them in the comment section.

### About me?
I am a backend developer, proficient in bla bla bla bla bla bla bla bla bla bla

Follow me on bla bla bla bla bla bla