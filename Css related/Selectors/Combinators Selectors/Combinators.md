## Selecting HTML elements with CSS combinators

<!-- Introduction -->
### My Previous Articles
This is the third part of my CSS selectors series if you do not already know the basics of CSS selectors. Be sure to check them out before reading this article.

In this article, we will discuss CSS combinators. Which are a type of CSS selectors.


### What are combinators

Combinators are CSS selectors that select elements based on the relationship between 2 selected elements.

Combinators are applied within 2 selectors, and if the relationship between the first and second element is as defined by the combinator, then the second element is styled.



### Types of combinators
There are four types of CSS selectors
- ### Descendant Selector (" ")
    
    Syntax: `Element Descendant`

    Descendant selectors select elements that are children, grandchildren, great-grandchildren, and so on, of the selected elements.

    An element is selected if it can be found anywhere within the parent element. Even if it is nested in a different element.
    
    It is represented by a single space (" ") between the 2 selectors.

    Example:
    ```
    div p{
        color: blue;
    }
    ```
    This example changes the text color of `p` elements that can be found inside a `div` element.

    ```
    <h1>This is a header</h1>
    <p>This is out side a div element</p>

    <div>
        <h2>This is a header</h2>
        <p>This is inside a div element</p>

        <ul>
            <li>This is a list item</li>
            <p>This is a p tag inside an element that is inside a div element</p>
            <li>This is a list item</li>
            <p>This is a p tag inside an element that is inside a div element</p>
        </ul>
    </div>

    <p>This is outside a div element</p>
    ```
    Result: 
    <!-- All div p are colored blue -->

    Notice that even `p` elements that are inside the `ul` element are also selected. This is because the `ul` element is a child of the `div` element and that makes the `p` elements within the `div` elements grandchildren of the `div` element, hence they are also selected.



- ### Child Selector (">")
    Syntax: `Element > Child`

    Child selectors or direct descendants select **only** the direct children of an element.

    If the element is nested within another element, it is not selected.

    It is represented with a right-angle bracket `>` between the two elements.

    Example:
    ```
    div > p{
        color: red;
    }
    ```
    This example changes the text color of only the `p` elements that are children of `div` elements.
    
    ```
    <h1>This is a header</h1>
    <p>This is out side a div element</p>

    <div>
        <h2>This is a header</h2>
        <p>This is inside a div element</p>

        <ul>
            <li>This is a list item</li>
            <p>This is a p tag inside an element that is inside a div element</p>
            <li>This is a list item</li>
            <p>This is a p tag inside an element that is inside a div element</p>
        </ul>
    </div>

    <p>This is outside a div element</p>
    ```
    Notice that only `p` elements that are children of `div` elements are selected, and the `p` elements that are inside the `ul` are not affected.



- ### Adjacent Sibling Selector ("+")

    Syntax: `Element + sibling`

    Adjacent sibling selectors select adjacent siblings, that is elements that **share the same parent** and come **immediately after** the element.

    If there is an element of a different type between the element and the sibling, then the sibling is not selected.

    It is represented with a plus sign `+` between the two elements.
    Example:
    ```
    h1 + p{
        border: 2px solid black
    }
    ```
    This example adds a border around all `p` elements that come immediately after an `h1` element.
    ```
    <h1>This is a header</h1>
    <p>This paragraph comes after a header</p>
    <p>This is a paragraph</p>

    <h1>This is a header</h1>
    <span>This is a span</span>
    <p>This is a paragraph</p>

    <div>
        <h1>This is a header</h1>
        <p>This paragraph comes before a header</p>

        <h2>This is a header</h2>
    </div>
    ```

    Notice that only the `p` elements that come after an `h1` element are styled, and all other `p` elements are omitted from the styling.


- ### General sibling selector ("~")
    Syntax: `Element ~ sibling`

    General sibling selectors select **all** elements that come after a particular element.

    If there is an element of a different tag, between the 2 elements, it still selects them.

    It is represented by the tilde sign `~`,(the button right under the `Esc` key on your keyboard, pressing shift + the key will give you the tilde sign).
    
    Example:
    .limit ~ li{
        text-decoration: line-through;
    }

    This example adds a line through all `li` elements that come after the element with the class of "limit".
    ```
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li class="limit">List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
        <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
        </ul>
        <li>List item 6</li>
        <li>List item 7</li>
    </ul>
    ```

    Notice that all elements after the element with a class of "limit" receive the styling, even those that are separated by a nested list.

<!-- ### Summary 
- Descendant selectors
    - Selects the second element if it can be found anywhere in the first element. 

    - You can use it style anchor tags in the navigation bar.

- Child selectors
    - Selects the second element if it is a direct child of the first element. 

    - You can use it to style all list items in an ordered list, such that nested lists will not be affected.

- Adjacent sibling selector
    - Selects the second element if it comes immediately after the first element

    - Both elements must share the same parent element

    - You can use it to style all the p elements that come immediately after a header.

- General sibling selector
    - Selects the second element if it comes after the first element, not necessarily immediately after.

    - Both elements must share the same parent element

    - You can use it to select all siblings of an li element that come after the specified list item -->

### Conclusion
CSS combinators select elements indirectly, so you should be careful when using them.

They can also be used with any type of selector(simple or attribute)

#### Note that the comma `,` is not a combinator
The comma is used to separate selectors in a selectors list

[Here]() is a link to a codepen where the effects of the different combinators are shown.
You could also check out [MDN web docs]() and [w3schools]() for further knowledge on CSS combinators


Although I did my research, I may still be missing out on some things since I decided to make this article a short one, feel free to drop a comment on anything, be it a correction or something I missed out. 
<!-- ### The comma
A common mistake people make is confusing the comma (",") to be a combinator, commas are used to separate selectors in a selectors list. See this [article]() for more details. -->


<!-- Conclusion -->

### Thank you for reading (^-^)