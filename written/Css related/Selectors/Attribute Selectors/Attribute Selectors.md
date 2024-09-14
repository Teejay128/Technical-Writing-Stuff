# Selecting HTML elements with Attribute Selectors

Heya there :wave:

In this article, we will discuss CSS attribute selectors. 

This is the second part of my CSS selectors series, which is a series aimed at giving a proper introduction to CSS selectors, in the previous article we discussed CSS simple selectors. I would advise you to check it out before continuing this article.


### What are attributes
Attributes are pieces of markup language used to modify HTML elements.

Attributes usually appear in the form of name-value pairs ( `attribute = "value"` ) in the opening tag of an element.

### Attributes can be used to: 

-  ### Add functionality
    Attributes either modify or provide functionality to those elements that cannot function without them.

    For instance, the Anchor tag is an HTML element used to anchor/link an external URL to content on a webpage.

    ```
    <a href = "www.google.com">Google</a>
    ```

    Here the google URL is anchored to the text "Google" on the webpage. This is how links are written in HTML

    The `href` attribute provides the address of the external link. Anchor tags will not function if the `href`(hyperlink reference) attribute is absent as there would be no external link for the anchor tag to link to.

- ### Add properties

    As in the case of the `placeholder` attribute in `input` elements which is used to set the value of the placeholder.

    The input element would still work fine even if the placeholder value were absent.

## Attribute selectors

Attribute selectors are selectors that select elements based on their attributes.

Selecting elements with attribute selectors has many benefits as you can configure the styling to occur only when a certain condition is met.

You could select elements using the following conditions:


###  Elements with a certain attribute
This method selects all elements that possess a certain attribute. It Only checks for the presence of the attribute and does not consider the value.

Syntax:
```
element[attribute]{
    (styling)
}
```
The above selects all elements with the `attribute` attribute.

### Elements with a particular value for a certain attribute
This method first checks if a certain attribute is present and only selects it if its value is equal to the specified value.

Syntax:
```
element[attribute = "water"]{
    (styling)
}
```
The above selects all elements with an `attribute` attribute that has a value of `value`.


### Using Regex with attributes
Attribute selectors can be modified to add further restrictions on value selection using regular expressions (regex).

The modification is done by placing the expression before the equals sign `=`.
```
element[attribute (exp)= "value"]{
    (styling)
}
```
There are many types of expressions that can be used in this way.

This set of values will be used for comparing:
Let us assume we had attributes with these values in our HTML:
"water", "water god", "drink water", "water-borne", "blood-water", "waterpark" and "tapwater".


- ### The tilde
    `~`
    [attribute ~= "water"]
    For this condition to be met the value of the attribute has to be a whole word with "water" in a space-separated list.

    >The above will match values of "water", "water god", and "drink water" **only**.

- ### The pipe
    `|`
    [attribute |= "water"]
    For this condition to be met the value of the attribute has to be a whole world with "water" followed by a hyphen `-`.

    >The above will match values of "water", "water god", "drink water", "water-borne and "blood-water" **only**.


- ### The caret
    `^`
    [attribute ^= "water"]
    For this condition to be met the value of the attribute has to start with "water".

    >The above will match values of "water", "water god", "water-borne" and "waterpark" **only**.


- ### The dollar sign
    `$`
    [attribute $= "water"]
    For this condition to be met the value of the attribute has to end with "water".
    This is self 

    >The above will match values of  "water", "drink water", "blood-water" and "tapwater" **only**.

- ### The asterisk
    `*`
    [attribute *= "water"]
    For this condition to be met the value of the attribute has to contain "water".

    >The above will match values of "water", "water god", "drink water", "water-borne", "blood-water", "waterpark" and "tapwater".

    As long as "water" is present somewhere in the value of the attribute, the element would be selected by this selector.


## Practice
Here is an embedded codepen for you to see the above attribute selectors in action, you could even play around with the values and view the results.

PS: I only used colors or simple stylings to make the effects easily noticable.


## Extras
### Types of attributes.
HTML attributes are generally classiified as:
- Required Attributes: `href`, `src`
- Optional Attributes: 
- Standard Attributes: 
- Event Attrbutes:

[w3schools](https://www.w3schools.com/tags/ref_attributes.asp) provides a list of HTML attributes, you could check them out.



<!-- HTML attributes are generally classified as required attributes, optional attributes, standard attributes, and event attributes: Usually the required and optional attributes modify specific HTML elements. While the standard attributes can be applied to most HTML elements. text i got from google -->
<!-- ### IDs and Classes are also attributes. -->


<!-- ### Some attributes are specififc to certain elements only
Some attributes are element specific, in other words they wouldn't work if they were placed in other elements. For example, the `alt` attribute is used to place text that is to be displayed if an image cannot be displayed on a webpage due to an error. The `alt` attribute is only specific to the `<img/>` element, as no other element on he webpage needs that functionality. -->


<!-- IDs and Classes -->


<!-- Classes and IDs are also forms of attributes and can be selected with attribute sectors.
```
div[id = "red-bull"]{
    styling
}
```
Styling like this is unadvisable though, as the specificity values of attributes and IDs are not the same. -->

<!-- 
### Other examples of attributes
There are a lot of attributes in CSS, and there different types as well
Proceed to give an overview -->

<!-- ### IDs and Classes are also types of attributes
IDs and classes are also attributes, if you take in to account the way they are defined in HTML elements, you will notice that they are both name value pairs and they are defined in the start tags. -->

## Conclusion
Many thanks for reading up till this point, if you enjoyed this article, make sure to leave a like and share with friends, I guess.

Also I am only a beginner, if I made any errors, feel free to drop a correction in the comment section. :heart:
<!-- Use cases of Attribute selectors
Styling links and forms without classes or Ids
With the addition of regex you can further narrow the selection ranges -->
