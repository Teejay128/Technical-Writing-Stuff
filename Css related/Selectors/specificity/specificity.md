Have you ever wondered what happens when you apply multiple styles to a single element using different CSS selectors? The browser can't use all the different styles at once, hence the need for a method to select a dominant style among multiple styles.

## Inroduction
In this article we will discuss Specificity, which is the method that the browser uses to determine which style will be applied in a situation where there are many styles.

Knowledge of specificity is crucial to developers, as it allows them know which styles the browser will use in a case where there are multiple styles.

All selectors have a specificity value, and when multiple selectors are used to select the same element, the browser chooses the selector with the highest specificty.

## Specificity
Specificity is a measure of how small
<!-- As the name implies, specificity is a measure of how small the range of possible values for a specific condition is, this means if you are not specific, you are more likely to be misunderstood. -->

All CSS selectors can be grouped into 4 degrees of specificity:

- Inline styles (1000)
- IDs (100)
- Classes, Attributes and Pseudo-classes (10)
- Elements and Pseudo-elements (1)

> PS: if you dont know any of the above selectors the you could check out my series on CSS selectors.

The arrangement above is known as the **specificity hierachy**: a representation of the specificity of different selectors in descending order.

The values in brackets are known as the **specificity hierarchy score** of the selector, they are used to calculate the specificity of combined selectors.

## Calculating Specificity
Let us take an `h1` element with an `id` of "firstHeader" and a class of "header"

```
<h1 id="firstHeader" class="header">Tough times never last</h1>
```

then apply the following styles to it

```
h1{
    background-color: green;
}

.header{
    background-color: blue;
}

#firstHeader{
    background-color: red;
}
```

Can you guess what color the header is going to be?

> Hint: Which selector has the highest value in the specificity hierarchy.

If you guessed red, then you are correct. This is because the red background color was applied with an ID `#firstHeader` selector, which has a higher specificity value than the class `.header` and element `selectors`.

In cases where you have combined selectors, you will need to calculate the combined specificity of the various selectors present.

> Combined selectors are selectors that made by combining 2 or more selectors, they are formed with Combinator selectors

For this case let us consider the second `<p>` tag in the HTML code below

```
<div>
    <p class="paragraph" id="firstParagraph">Don't mind me</p>
    <p class="paragraph" id="secondParagraph">Take note of my class and Id</p>
</div>
```

Let us use the following combined selectors

```
div p.paragraph{
    background-color: blue;
    color: white;
}

#secondParagraph{
    background-color: red;
    border: 2px solid black;
}
```

The first selector `div p.paragraph + p` can be broken down and represented as

- `div` => Element selector => value = 1
- `p` => Element selector => value = 1
- `.paragraph` => class selector => value = 10

The specificity of the above selector is the combined specificity of all the selectors present, and in this case the answer is 12 (1 + 1 + 10).

The second selector `#secondParagraph` can be broken down as

`#secondParagraph` => ID selector => value = 100.

Therefore the browser uses the styles in the `#secondParagraph` selector. Since the specificity value of the `#secondParagraph`(100) is greater than the specificity value of the `div p.paragraph + p` (12).

### Non-conflicting styles
Specificity is a means of resolving conflicting styles. conflicting styles occur when 2 different selectors try to set a value for a specific property.

Lets take the code we used in the previous section as an example:

```
div p.paragraph{
    background-color: blue;
    color: white;
}

#secondParagraph{
    background-color: red;
    border: 2px solid black;
}
```

Here both selectors assign a value for the background-color property, hence a conflict occurs, and said conflict is resolved by applying the style in the selector with the higher specificity: `#secondParagraph`.

Since the color property is only present in the first selector, even though it is the selector with a lower specificity, since the same style is not present in the selector with a greater specificity, there is no conflict, hence the browser uses the style.

> The same goes for the border property in the second selector.

NOTE: when 2 elements have equal specificity the style in the latter is applied


### The `!important` tag
Adding the `!important` tag to a value automatically makes it the style to be used for that particular property.

For Example:

```
div p.paragraph{
    background-color: blue !important;
    color: white;
}

#secondParagraph{
    background-color: red;
    border: 2px solid black;
}
```

Even though the second selector has a higher specificity, the presence of the `!important` tag in the background-color property of the first selector still gets applied.

You could say the value of the `!important` tag in the specificty hierarchy is 10,000 as it overides all other selectors irrespective of their specificty value.


## Conclusion
Knowing how to calculate specificity is a good skill to have, but you do not to do this every single time as there tools out there like specificity calculators that do this job for you.

A personal favorite of mine is the "Selectors explained", by _______.

I like this more because it not only shows the specificity value, but also converts the inputed selector into simple english.

Now that you know how specificity works you can go out there and be rest assured that your selectors will work properly.

If you liked this article, don't forget to give a thumbs up :thumbUp: and share with your friends.

### Thank You for reading :heart:
