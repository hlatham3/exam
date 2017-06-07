## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
> Your answer here... It is an object within the react framework that we use to call from other components that ties the DOM to the virtual dom that we can render.  Once we change this to a class, we can use this to pass data between areas on a UI and only reder those areas.  For example:  Class MyContainer React.Component {} or Const MyContainer = () => {}
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> Your answer here... When we are wanting to use state data and render only peices of an API, we would use Class.  If we are only receiving props and wanting to return something but not render, we would use const.
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> Your answer here... var hello = react.createElement{h1, null, "Hello Dojo!"}
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> Your answer here... It creates a new object and then you can return that object -- If you use the 'this' instead and the arrow function, that will create the new object, this, and return it for you.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> Your answer here... D, because it means I am done with the test ;)
---

Done! Time to start the [React app](./app-details.md)!