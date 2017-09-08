# Intro to Data Visualization

### Preface

The field of data visualization is an entire science unto itself, and while that
may be daunting for developers, the notion of actually implementing visualizations
in web applications from a scientist's point of view is far more daunting than you
may think.

Although it's unlikely there is a friendly neighbourhood data-viz scientist
lurking around, there are golden rules that if we follow. we should end up with something not
totally useless at worst, and facilitate entirely new discoveries at best.

### First things first

So you want to do some data viz, don't you?

Well.. you're going to need some data. Good data. *Interesting Data*.

**Very Boring Data:**

```javascript
let fruits = ['apple', 'apple', 'apple']
```

**Boring Data:**

```javascript
let fruits = [
  {
    type: 'apple',
    condition: 10 // the best apple Mother Nature has ever made
  },
  {
    type: 'apple',
    condition: 5 // you would probably eat this apple
  },
  {
    type: 'apple',
    condition: 1 // you would not feed your evil dog this apple
  },
]
```

**Possibly Interesting Data:**

```javascript
let fruits = {
  apples: [
    { condition: 10 },
    { condition: 5 },
    { condition: 1 },
  ],
  oranges: [
    { condition: 8 },
    { condition: 7 },
    { condition: 6 },
  ]
}
```

**Pretty Interesting Data:**

```javascript
let fruits = {
  apples: [
    { condition: 10, pickedDate: 1404825846110 },
    { condition: 5, pickedDate: 1304825846110 },
    { condition: 1, pickedDate: 1204825846110 },
  ],
  oranges: [
    { condition: 8, pickedDate: 1504825846110 },
    { condition: 7, pickedDate: 1404825846110 },
    { condition: 6, pickedDate: 1304825846110 },
  ]
}
```

**Interesting Data:**

```javascript
let fruits = {
  apples: [
    { condition: 10, pickedDate: 1404825846110, from: 'Mexico' },
    { condition: 5, pickedDate: 1304825846110, from: 'Canada' },
    { condition: 1, pickedDate: 1204825846110, from: 'Canada' },
  ],
  oranges: [
    { condition: 8, pickedDate: 1504825846110, from: 'Mexico' },
    { condition: 7, pickedDate: 1404825846110, from: 'Canada' },
    { condition: 6, pickedDate: 1304825846110, from: 'Canada' },
  ]
}
```

### Asking Interesting Questions

Now that we have some *interesting* data we can ask some *interesting* questions.
Keep in mind that this is all the data we have. We can't make definitive statements
about all oranges that come from Mexico, but we can make comparisons that present
corollary information. Such as:

- Is there a correlation between the condition of a fruit and its origin?
- Does an apple's condition worsen more than oranges do, irrespective of their origins?

### Time to Visualize

Okay. We have interesting data and interesting questions. How do we actually
present the two on the screen?

(The following assumes "web")

  - HTML (div, span etc)
  - SVG (rect, path etc)
  - WebGL
