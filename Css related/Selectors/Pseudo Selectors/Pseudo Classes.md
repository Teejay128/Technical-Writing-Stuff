<!-- ## Pseudo-selectors -->

## Introduction
Hey there, :wave:

In this article we will discuss Pseudo-classes, which is a type of CSS selector. We will start by defining pseudo classes, listing examples and building very simple tooltip hover.

Let's dive right in :surfing:


### Pseudo-Classes (`:`)
Pseudo-classes act like classes but they are not actual classes. They are used to style an element **only** when they are in a particular state.

For example they can be used to:
- Style an element when it is active
- Style an element when it gets focus
- Style visited and unvisited links differently

Pseudo-classes cannot work independently, they have to be combined with other selectors using a colon `:`.

A popular example is the `:hover` which styles elements when the mouse "hovers" over them.

```
h1:hover{
    background-color: gray;
    border-left: 2px solid green;
}
```

In the example used above:
- The original element is first selected with (`h1`)
- Then the pseudo-class `:hover` is added to specify the required state.
> Note that the colon and the pseudo-class must be written together with no space in between.

The original element only contains the default styling, which is overrode by the pseudo-selector when it is in the specified state.

> Unlike other selectors Pseudo-class names are not case sensitive


### Examples
There are a lot of pseudo-classes, luckily you dont have to memorize them as most IDEs like VScode provide autocomplete for pseudo-classes.

Pseudo classes can be general or element specific, that is some pseudo classes can be used on all elements while others can only work on certain elements.


Examples of pseudo-classes incude:
- `:link`: this is used to select **links** on the page that have not been visited.
- `:visited` this is used to select **links** on the page that have already been visited.
- `:active` this is used to select the **link** that is currently active.
> Note: when styling `a:active` must come after `a:link` and `a:visited` in order to be effective!
- `:focus` this is used to select the **input** element that is currently being filled.
- `:optional` this is used to select **input** elements that are optional.
- `:empty` this is used to select elements that are empty.
- `:root` this is used to select the document's root element.

Visit [w3schools](https://www.w3schools.com/css/css_pseudo_classes.asp) for a full list of pseudo classes and examples.


### How to use pseudo-classes to make a simple tooltip-hover
An example of a tooltip hover, is when you hover over an element, and a tooltip is displayed to show you more about the element. 

Don't worry if you are a total beginner, I am just showing an example of how pseudo-classes can be used in a webpage.

Steps to makin a simple tooltip hove:
1. Write the Html:
    ```
    <h3 class="element">
        Hover over me to see "more".
        <span class="tooltip">MORE, now you have seen "more"</span>
    </h3>
    ```

    Here we defined 2 elements a `h3` as the parent, and a `span` as the child(inside the parent element).

    The `h3` element is given a class of element, while the `span` is given a class of tooltip.

2. Set the visibility/display of the `span` to none:
    ```
    .tooltip{
        display: none;

        background-color: #128;
        color: #fffd;
        padding: 10px;
        border-radius: 10px;
    }
    ```
    We dont want the span element to be visible normally, so we hide it by setting the display to none.

    I also added extra styling to make the span element look better.(optional)

3. Add the hover Pseudo-class to the `h3`(parent element):
    ```
    .element:hover
    ```
    this selects the element only when it is in the hover state, that is when the mouse is over it.

    But what we want to change is not the parent element but rather, the child element, we want to change the visibilty/display back to block(the default display).

4. Change the display of the `span` element:
    ```
    .element:hover .tooltip{
        display: block;
    }
    ```

    We make use of the [descendant selector]() to connect the 2 elements, so that when the mouse is over the parent element the display of the tooltip changes to block.


    Result?

## Conclusion
I hope you now know what pseudo-classes are and how to use them in your website.

Pseudo-classes are important because they make your page more responsive, as some contents of the website change based on user actions.

> Note: Pseudo-classes are not to be confused with pseudo-elements which only select certain portions of the element.

If you liked this article don't forget to leave a like and follow for more content.
### Thank you for reading (^_^)