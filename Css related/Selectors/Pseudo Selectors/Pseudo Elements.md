<!-- ## Pseudo-elements -->

## Introduction
Hey there, :wave:

In a previous article we discussed pseudo-classes, in this article we will discuss Pseudo-elements, which are also a type of pseudo selectors. We will start by defining pseudo elements, listing some examples, then move on to how you can use them in your website.

> Note: code snippets used in this article will be showcased in an embedded codepen at the end of this article

Let's dive right in :surfing:


## Pseudo-Classes (`:`)
Pseudo-elements act like elements but they only represent a certain part of the element. I say they act like elements because the browser treats them like elements and allows you to style them independently.

Examples of pseudo-elements include:
- the first letter, or line, of an element
- the space before or after an element

Pseudo-elements cannot work independently, they have to be combined with other selectors using two colons (`::`).

Pseduo-elements select a part of an element, so when using pseudo-elements the element in question needs to be selected as well.

The syntax:
```
selector::pseudo-element{
    property: value;
}
```

The double colon syntax `::` differs from the single colon `:` in pseudo-classes, this difference is part of the changes made by W3C(World Wide Web Consortum) to distinguish between pseudo-classes and pseudo-elements.


## Examples
There are only a few pseudoe-lements but you do not need to memorize them as most IDEs provide auto-complete for pseudo-elements.

Below is a list of some common pseudo-elements.
- ### The `::after` pseudo-element
    This pseudo-element selects the space **after** an element. You might have seen some webpages where there is an image after each heading, that image was added using this pseudo selector.

    ```
    h1::after{
        content: "(^-^)";
        background-color: #128;
        color: white;
        padding: 5px;
        border-radius: 10px;
    }
    ```

    The `content` property above specifies what should go into the pseudo element. I used text here, but you could use icons or even images. I then added some styling to make the content more noticeable. 

- ### The `::before` pseudo-element
    This pseudo-element selects the space **before** an element.Like the `::after` pseudo-element, it can also be used to insert a content(like an image or icon) before elements.

    ```
    p::before{
        content: ":)";
        background-color: #128;
        color: white;
        padding: 2px;
        margin: 2px;
        border-radius: 10px;
    }
    ```

- ### The `::first-line` pseudo-element
    This pseudo-element selects the first line of an element. As the first line is ususally what holds the main point of the paragraph, using this to change the text-color or make increase the font-weight(boldness) will make the first-line stand out.

    ```
    p::first-line{
        font-weight: bold;
        font-family: 'Lucida Sans';
        font-size: large;
        color: blue;
    }
    ```

    As in the previous cases, there is no need to add the `content` property, as the first line of the paragraph already contains content.

- ### The `::first-letter` pseudo-element
    This pseudo-element selects the first letter of the frst word in an element. It is mostly used at the start of a paragraph to increase the font-size of the first letter.

    ```
    h2::first-letter{
        color: red;
        font-size: xx-large;
        font-weight: bold;
    }
    ```
    
    As this selects only the first letter, the styling that can be applied is limited to only letter-based stylings.

- ### The `::marker` pseudo-element
    This pseudo-element selects the markers of list items. A marker is that round item before `li` items that lets you know it is a list item. In ordered lists `ol`, the markers are usually numbers.

    ```
    li::marker{
        color: red;
        font-size: large;
    }
    ```

- ### The `::placeholder` pseudo-element
    This selects the placeholders in form inputs. The placeholder is the grey piece of text that is inside input elements, it is mostly used to specify what is to go into that input element.

    ```
    input::placeholder{
        color: green;
    }
    ```

- ### The `::selection` pseudo-element
    This is used to select the text that has been highlighted/selected by a user. You can select elements by right clicking and dragging your mouse over the elements you want to select.
    
    ```
    ::selection{
        background-color: black;
        color: white;
    }
    ```
    
    The default in most browsers is a light-blue background, with white text. But with this pseudo element, you can add you own styling.

Visit [w3schools](https://www.w3schools.com/css/css_pseudo_elements.asp) for a full list of pseudo classes and examples.


## Embedded Codepen:
PS: I only used simple styles like colors so you can see the direct effects of the styling.

## Conclusion
Now you know what Pseudo-elements are, and hoow you can use them in your webpages. Pseudo-elements dont do much but if used in the right way, it can transform your website wholesomely.

If you use pseudo-elements without specifying the original elements they are to select, they will just apply to all the elements in your page. For instance, `p::first-letter` will only apply to paragraphs, but `::first-letter` will apply to all elements that have a first letter.

> Note: Pseudo-classes are not to be confused with pseudo-elements which only select certain portions of the element. I explained pseudo-classes in [this article].

If you liked this article don't forget to leave a like and follow for more content.
### Thank you for reading (^_^)