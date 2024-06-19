**_---------------------06/02/2024--------------_**

# Inception Homework

## 1. What is the difference between library and framework and what is React JS?

### Library:

The main difference between a library and a framework is that a library gives you the control to write and structure the code in your own way. Basically, the control is in your hands with a library. It is like the police - it provides functions and methods to be used as needed. The best examples of libraries are React.js and jQuery.

**React JS** is a JavaScript library used for building user interfaces.

### Framework:

If you are using a framework, the flow is not in your hands; it gives you instructions on how and where to write the code. It is like the military - it imposes a specific structure and flow for your code. Examples of frameworks are AngularJS and Vue.js.

**Technical Difference**:
The technical difference between a library and a framework lies in a concept called **inversion of control**.

## 2. What is Emmet?

Emmet is a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, XML, and other structured code formats via content assist.

**Developers**: Vadim Makeev (2008), Sergey Chikuyonok, and Emmet users.

## 3. What is CDN?

A CDN (Content Delivery Network) is a system of servers distributed across various locations around the world. The main purpose is to deliver web content to the user quickly and efficiently.

### Benefits of CDN:

- **Reliability**: If one server is down, another server can take over because of the distribution of servers in different multiple locations.
- **Proximity**: When a user requests a webpage, the CDN delivers the content from the server closest to the user.
- **Speed**: CDNs make the internet much faster.

## 4. What is inside the CDN?

A CDN consists of:

- A network of edge servers with caching capabilities.
- Load balancing.
- DNS routing.
- Security features.

All these components work together to deliver web content efficiently.

## 5. What is the shortest program in JavaScript and React JS?

- The shortest program in JavaScript is an empty file.
- The shortest program in React JS includes the CDN of React and ReactDOM in the `index.html` file, which allows you to write React code.

**Note**:

- React JS elements are objects, nothing more.
- Always write the code in order because it processes the code line by line.
- The React JS code should be after the CDN, not above it. The browser processes the CDN first, identifies that it is React, and then executes the React JS code.

## 6. What is the difference between `href=""` and `src=""` and what is the meaning of `rel="stylesheet"` in linking CSS?

- **`href=""`**: Defines the link to an external resource and specifies the URL of the page or resource the link goes to.
- **`src=""`**: Used to embed content such as images or scripts directly into the document.
- **`rel="stylesheet"`**: Specifies that the linked resource is a stylesheet that should be applied to the document.

## 7. What is the difference between `async` and `defer`?

- **`async`**: Loads and executes the script as soon as possible without waiting for HTML parsing. The execution order is not guaranteed.
- **`defer`**: Loads the script asynchronously but executes it only after HTML parsing is completed, maintaining the order of the scripts.

## 8. What is the use of `crossorigin`?

This attribute helps to ensure that resources are loaded securely and in compliance with CORS (Cross-Origin Resource Sharing) policies, preventing potential security risks associated with loading external resources.

# Igniting Our App

## 1. What is a Bundler?

Bundlers are tools that package multiple files and modules into a single file to be served to the client. The process of bundling is important because, in modern web development, there are numerous JS files, stylesheets, and other assets. To optimize these assets and improve performance, bundlers are used.

### Works of a Bundler:

- **Dependency Resolutions**
- **Assets Transformations**
- **Bundling**
- **Code Splitting**

### Types of Bundlers:

- **Webpack**
  - Most widely used for large and complex projects.
  - Has extensive configuration and a large ecosystem.
- **Vite**
  - Great choice for fast development experiences.
  - Uses native ES modules in development and Rollup for production builds.
- **Parcel**
  - Known for its zero-configuration setup.
  - Easy to use and great for smaller projects and quick prototyping.
- **Rollup**

## 2. Which Bundler Uses CRA?

Create React App (CRA) uses the Webpack bundler.

## 3. Difference Between Dependencies and Dev-Dependencies in React's `package.json`

### Dependencies

- Libraries that your project needs to run.
- Core libraries relied on during production.
- Example:
  ```json
  "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
  }
  ```

### Dev-Dependencies

- Libraries needed only during development and testing phases.
- Tools that help you write, build, and test your code but aren't required in production.
- Example:
  ```json
  "devDependencies": {
      "babel-cli": "^6.26.0",
      "webpack": "^5.24.2",
      "jest": "^26.6.0"
  }
  ```

## 4. Difference Between `package.json` and `package-lock.json`

### `package.json`

- Acts as a manifest file for your React project.
- Lists all the libraries the project needs and their allowed version ranges.
- Includes metadata about the project (name, version, description, scripts).
- Example:
  ```json
  {
    "name": "my-react-app",
    "version": "1.0.0",
    "description": "A sample React application",
    "main": "index.js",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "axios": "^0.21.1"
    },
    "devDependencies": {
      "jest": "^26.6.0",
      "eslint": "^7.20.0"
    }
  }
  ```

### `package-lock.json`

- Provides an exact versioned dependency tree.
- Ensures consistent builds across different environments.

**Note**: Both `package.json` and `package-lock.json` ensure that the React project is stable and flexible.

## 5. Should You Add `node_modules` to `.gitignore`?

Yes, keep `node_modules` in `.gitignore` because it is too heavy to push to a GitHub repository. You can recreate `node_modules` using `package-lock.json`.

## 6. Should You Push `parcel.cache` in `.gitignore`?

Yes, add `parcel.cache` to `.gitignore`. Generally, include files that can be generated on the server in `.gitignore`.

## 7. What are Transitive Dependencies?

Transitive dependencies are packages that are dependencies of other dependencies.

### Example:

```json
"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "axios": "^0.21.1"
}
```

In the above example, `react`, `react-dom`, and `axios` have their own dependencies, which are transitive dependencies.

# Laying the Foundation

## 1. What is Polyfill?

Polyfill is a piece of JavaScript code that provides modern functionality to older browsers that lack native support for those features.

### Components of Polyfills:

- **Feature Detection**
- **Feature Implementation**

## 2. What is Babel?

Babel is a JavaScript compiler that converts JSX into normal JavaScript code, making it understandable by browsers. It also converts modern JavaScript (ES6) to older versions.

### Example:

```javascript
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

## 3. What is Tree Shaking?

Tree shaking is a technique used to remove unused code from JavaScript bundles, making them smaller and faster to load. It is also known as dead code elimination.

## 4. Difference Between HTML and JSX

- **HTML**: Markup language that determines the structure of a web page.
- **JSX**: JavaScript XML used to write HTML and JS code inside React. It resembles HTML but is not exactly the same.

**Note**: In JSX, you must return a single parent element.

## 5. Merits and Demerits of JSX

### Merits:

- Easy to write HTML text in React.
- HTML tags can easily be converted to React elements.
- Allows direct DOM manipulation without `appendChild()` or `createElement()`.
- Prevents XSS (Cross-Site Scripting) attacks.
- Detects most errors during compilation.
- Can be used inside `if` statements and `for` loops.

## 6. What is a React Component and React Element?

- **React Element**: A plain object describing a part of the UI.
- **React Component**: A function or class that produces React elements and manages their state and lifecycle.

## Show me the code Talk is Cheap

## 1. Is JSX Mandatory for React?

No, JSX is not mandatory for React. It simplifies writing React elements but everything done with JSX can be done with plain JavaScript using `React.createElement`.

### Example:

Using JSX:

```javascript
const example = <h1>Hello Gautam</h1>;
```

Without using JSX:

```html
<div id="root"></div>
var e = React.createElement; e('h1', {}, 'Namaste JavaScript');
document.getElementById('root');
```

## 2. Is ES6 Mandatory for React?

No, ES6 is not mandatory for React but is highly recommended due to its features like arrow functions, classes, `let` and `const` variables.

## 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent><TitleComponent/>}` in JSX

- `{TitleComponent}`: A JavaScript expression, variable, or React element.
- `{<TitleComponent/>}`: Represents a component that returns some JSX.
- `{<TitleComponent><TitleComponent/>}`: Equivalent to the previous but used if there are no child elements.

### Example:

```jsx
<TitleComponent>
  <FirstChild />
  <SecondChild />
  <ThirdChild />
</TitleComponent>
```

## 4. How Can I Write Comments in JSX?

- Single line comments: `{/* comments */}`
- Multi-line comments:
  ```jsx
  {
    /*
      multi line comments
      multi line comments
      multi line comments
  */
  }
  ```

## 5. What is `<React.Fragment></React.Fragment>` and `<></>`?

- `<React.Fragment></React.Fragment>`: Allows grouping a list of children without adding extra nodes to the DOM.

### Example:

```jsx
const items = [1, 2, 3];

function MyList() {
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item}>
          <li>{item}</li>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
```

- `<></>`: Shorthand tag for React Fragment. Does not support `key` attribute.

### Example:

```jsx
import React from "react";

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
    </>
  );
}

export default MyComponent;
```

## 6. What is Reconciliation in React?

Reconciliation is the process through which React updates the browser DOM efficiently. It uses a virtual DOM (VDOM) to make updates by comparing it with the real DOM and updating only the modified nodes.

### Key Concepts:

- **VDOM**
- **Diffing Algorithm**
- **Components Updates**

### Steps in Reconciliation:

1. **Render Phase**
2. **Diff Phase**
3. **Commit Phase**
   - Updates the DOM, triggers side-effects, and calls lifecycle methods like `componentDidUpdate`.

## 7. What is React Fiber?

React Fiber is a reimplementation of the core algorithm used by React, introduced in React 16.

### Goals of React Fiber:

1. **Incremental Rendering**
   - Allows React to pause and resume work, avoiding blocking the main thread for long periods.
2. **Concurrency**
   - Prioritizes updates, pausing less important ones to focus on important tasks, improving performance and responsiveness.
3. **Better Handling for Updates**
4. **Splitting Work into Chunks**
   - Prioritizes tasks based on importance.

## 8. Why Do We Need `keys` in React?

Keys are special attributes

needed to identify elements in a list. They help React efficiently update, delete, or reorder elements.

## 9. Can We Use Index as a Key in React?

Yes, but it is not considered a good practice. Using indexes as keys can negatively impact performance and cause issues with component state if the list order changes.

## 10. What are `props` in React?

Props, short for properties, are arguments passed into React components. They are used to pass data from parent to child components and are essential for dynamic data flow.

## 11. What is Config-Driven UI?

Config-driven UI refers to a design pattern where the UI is dynamically constructed based on configuration data rather than being hardcoded. This allows developers to create flexible and customizable UIs that can be modified without changing the underlying codebase.

This pattern is particularly beneficial when the UI needs to be frequently changed or tailored for different users or environments.

## 12. Difference between Virtual DOM vs Real DOM?

### Introduction

DOM (Document Object Model) represents the structure of a web application. It allows scripts to update the content, style, and structure of the document dynamically. Whenever changes are made in the application, the DOM gets updated, and the user can visualize these changes. This document explains the differences between the Virtual DOM and the Real DOM, including their benefits, drawbacks, and use cases.

### What is the Real DOM?

The Real DOM represents the web page as a document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects that can be modified using scripting languages like JavaScript. While the Real DOM's tree-like structure allows for fast updates, these updates can become slow and resource-intensive because the entire tree or large parts of it must be re-rendered whenever a change is made.

#### Characteristics of the Real DOM:

- **Direct HTML Updates**: Can directly update HTML elements.
- **Expensive Manipulation**: DOM manipulation is resource-intensive.
- **Memory Usage**: Can lead to memory wastage due to frequent updates and re-renders.
- **Slow Updates**: Updating and re-rendering the DOM can be slow.
- **Specific Node Targeting**: Allows direct targeting and manipulation of specific nodes (HTML elements).

### What is the Virtual DOM?

The Virtual DOM is a lightweight, in-memory representation of the Real DOM. It acts as an abstraction layer, allowing updates to be made without directly affecting the Real DOM. The Virtual DOM maintains a virtual representation of the UI, and changes made to it are reconciled with the Real DOM using an efficient diffing algorithm. This process ensures that only the necessary updates are made, minimizing the performance impact.

#### Characteristics of the Virtual DOM:

- **Abstraction**: It is a virtual representation of the Real DOM, used primarily for efficient updates.
- **Efficient Manipulation**: DOM manipulation is easier and more efficient.
- **Memory Efficient**: Reduces memory wastage by only updating the necessary parts of the DOM.
- **Fast Updates**: Updates the DOM quickly due to efficient reconciliation.
- **No Direct HTML Updates**: Cannot directly update HTML elements.
- **JSX Updates**: Updates JSX if elements change, providing a smooth and fast user experience.
- **High Node Production**: Can produce about 200,000 Virtual DOM nodes per second, making it highly efficient.

### Comparison Table

| **Real DOM**                                              | **Virtual DOM**                                 |
| --------------------------------------------------------- | ----------------------------------------------- |
| DOM manipulation is very expensive                        | DOM manipulation is very easy                   |
| There is too much memory wastage                          | No memory wastage                               |
| It updates slow                                           | It updates fast                                 |
| It can directly update HTML                               | It can’t update HTML directly                   |
| Creates a new DOM if the element updates                  | Updates the JSX if the element updates          |
| Allows direct targeting of specific nodes (HTML elements) | Produces about 200,000 Virtual DOM nodes/second |
| Represents the UI of your application                     | A virtual representation of the DOM             |

### Key Concepts

- **Reconciliation**: The process of comparing the Virtual DOM and Real DOM to synchronize them. It ensures that only the necessary changes are made to the Real DOM, improving performance.
- **Diffing Algorithm**: A technique used in reconciliation to efficiently compare and update the Virtual and Real DOMs.

Certainly! Let's format the information into a `README.md` file, organized to address each question clearly.

---

# React.js Essentials - README

## Table of Contents

1. [Introduction to Exporting in React](#1-introduction-to-exporting-in-react)
2. [Choosing Between .js and .jsx Extensions](#2-choosing-between-js-and-jsx-extensions)
3. [Config-Driven UI in React.js](#3-config-driven-ui-in-reactjs)
4. [Understanding State, Hooks, and useState](#4-understanding-state-hooks-and-usestate)
5. [Example Component: Counter](#5-example-component-counter)

---

## 1. Introduction to Exporting in React

### Types of Export

In React.js, modules are used to organize and reuse code. There are two main types of exports:

- **Default Export**: Used to export a single component, function, or value from a file.

  Example (`card.js`):

  ```javascript
  import React from "react";

  const Card = () => {
    return <div>Hello React!</div>;
  };

  export default Card;
  ```

  Usage:

  ```javascript
  // Another file
  import Card from "./Card";
  ```

- **Named Export**: Used to export multiple functions or values from a file.

  Example (`utils.js`):

  ```javascript
  export function add(a, b) {
    return a + b;
  }

  export function subtract(a, b) {
    return a - b;
  }
  ```

  Usage:

  ```javascript
  // Another file
  import { add, subtract } from "./utils";
  ```

**When to use each:**

- Use **named exports** when exporting multiple functions or values.
- Use **default exports** when exporting a single function or value from a file.

---

## 2. Choosing Between .js and .jsx Extensions

### Extension Choice

The choice between `.js` and `.jsx` extensions for React components does not affect functionality. It's typically chosen based on team conventions and preferences.

---

## 3. Config-Driven UI in React.js

### Purpose of Config-Driven UI

Config-Driven UI is a design pattern where UI elements are generated based on configuration data rather than being hard-coded. This approach in React.js offers:

- **Flexibility**: Easily update UI without modifying code.
- **Scalability**: Add new features by updating configuration.
- **Reusability**: Components are reusable via configuration abstraction.
- **Customization**: Customize UIs for different users/roles.
- **Separation of Concerns**: Separate UI structure from logic, improving maintainability.

**Example:**

```json
// cardConfig.json
{
  "cards": [
    {
      "title": "Card 1",
      "description": "This is the description for card 1.",
      "imageUrl": "https://via.placeholder.com/150",
      "backgroundColor": "#f8f9fa"
    }
    // Additional cards...
  ]
}
```

Usage (`configDriveCard.js`):

```javascript
import React from "react";
import cardConfig from "./cardConfig.json";
import Card from "./Card";

const ConfigDrivenCards = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {cardConfig.cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div>
  );
};

export default ConfigDrivenCards;
```

---

## 4. Understanding State, Hooks, and useState

### State and Hooks

- **State** in React determines how components render and behave, managed within components and changing over time.
- **Hooks** are special functions that allow you to "hook into" React state and lifecycle features from functional components.

### What is useState?

- `useState` is a fundamental React hook used to add state to functional components.
- It returns an array with two elements: the current state value and a function to update that value.

**Example (`Counter` component):**

```javascript
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
};

export default Counter;
```
