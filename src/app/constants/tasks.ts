const tasks = {
    react: {
        functionalNClassDiff: {
            name: "Functional and Class Components",
            categoryForUrl: "react",
            tasks: [
                "Create a new functional component called `Greeting` that takes a `name` prop and displays a greeting message with the name. Render the `Greeting` component in your main App component, passing in a name prop of your choice.",
                "Create a new class component called `Counter` that has a state variable `count` initialized to 0. Implement a button that, when clicked, increments the `count` state by 1. Render the `count` value and the button in your main App component.",
                "Convert a functional component to a class component. Take the `Greeting` component you created in task 1 and convert it into a class component. Set up a state variable `message` in the class component and initialize it with a greeting message using the `name` prop. Update the `render` method to display the `message` state instead of directly displaying the greeting message."
            ]
        },
        useEffect: {
            name: "useEffect hook",
            categoryForUrl: "react",
            tasks: [
                "Task - Fetch Data and Update State. Create a functional component called `UserList` that fetches a list of users from an API and stores them in a state variable called `users`. Use the `useEffect` hook to perform the data fetching inside the component. Make sure you include an empty dependency array `[]` to ensure it only runs once when the component mounts. Display the list of users on the screen.",
                "Update Title based on State. Create a component called `Counter` that initializes a counter state variable (useState). Use the `useEffect` hook to update the document title with the current counter value. Make sure you include the `counter` state variable in the dependency array. Add buttons to increment and decrement the counter value, and display the updated counter on the screen.",
                "Cleanup Function task. Create a functional component called `MousePosition` that displays the current x and y coordinates of the mouse cursor. Use the `useEffect` hook to add an event listener to track mouse movements on the document. Update the state variables `x` and `y` with the current mouse coordinates. Return a cleanup function from the `useEffect` hook to remove the event listener when the component unmounts."
            ]
        },
        useState: {
            name: "useState hook",
            categoryForUrl: "react",
            tasks: [
                "Toggle Button. Create a functional component called `ToggleButton` that renders a button. Use the `useState` hook to initialize a state variable called `isOn` to `false`. Implement an `onClick` event handler for the button that toggles the value of `isOn` between `true` and `false`. Display the current value of `isOn` on the button.",
                "Input Field task. Create a functional component called `InputField` that renders an input field. Use the `useState` hook to initialize a state variable called `inputValue` to an empty string. Implement an `onChange` event handler for the input field that updates the value of `inputValue` with the user's input. Display the current value of `inputValue` below the input field.",
                "Counter task. Create a functional component called `Counter` that renders a counter. Use the `useState` hook to initialize a state variable called `count` to `0`. Implement two buttons: one for incrementing the count and one for decrementing the count. Implement event handlers for the buttons that update the value of `count` accordingly. Display the current value of `count` on the screen."
            ]
        },
        useContext: {
            name: "useContext hook",
            categoryForUrl: "react",
            tasks: [
                "This is Theme Context task. Create a new context called `ThemeContext` using the `createContext` function. Inside the `ThemeContext`, define a state variable `theme` and a function `toggleTheme` to toggle between light and dark themes. Create a functional component called `App` that wraps its children with the `ThemeContext.Provider`, providing the `theme` state and `toggleTheme` function as values. Create two child components: `Header` and `Button`. In the `Header` component, consume the `theme` value from the `ThemeContext` and display a message based on the current theme. In the `Button` component, consume the `toggleTheme` function from the `ThemeContext` and implement a button that toggles the theme when clicked.",
                "User Context task. Create a new context called `UserContext` using the `createContext` function. Inside the `UserContext`, define a state variable `user` with an initial value of `null` and a function `setUser` to update the user. Create a functional component called `App` that wraps its children with the `UserContext.Provider`, providing the `user` state and `setUser` function as values. Create two child components: `LoginForm` and `UserProfile`. In the `LoginForm` component, consume the `setUser` function from the `UserContext` and implement a form that updates the user when submitted. In the `UserProfile` component, consume the `user` value from the `UserContext` and display the user's profile information.",
                "Localization Context. Create a new context called `LocalizationContext` using the `createContext` function. Inside the `LocalizationContext`, define a state variable `locale` and a function `setLocale` to change the current locale. Create a functional component called `App` that wraps its children with the `LocalizationContext.Provider`, providing the `locale` state and `setLocale` function as values. Create two child components: `WelcomeMessage` and `LanguageSelector`. In the `WelcomeMessage` component, consume the `locale` value from the `LocalizationContext` and display a welcome message based on the current locale. In the `LanguageSelector` component, consume the `setLocale` function from the `LocalizationContext` and implement a dropdown menu to select the desired locale."
            ]
        },
        useRef: {
            name: "useRef hook",
            categoryForUrl: "react",
            tasks: [
                "Create a functional component called `InputField` that renders an input field. Use the `useRef` hook to create a ref variable called `inputRef`. Attach the `inputRef` to the input field using the `ref` attribute. Implement a button that, when clicked, focuses the input field using the `inputRef.current.focus()` method.",
                "Measure Element Height. Create a functional component called `Box` that renders a div element. Use the `useRef` hook to create a ref variable called `boxRef`. Attach the `boxRef` to the div element using the `ref` attribute. Implement a button that, when clicked, logs the height of the `boxRef.current.offsetHeight` to the console.",
                "Store Previous Value. Create a functional component called `Counter` that renders a counter. Use the `useRef` hook to create a ref variable called `prevValueRef`. Initialize the `prevValueRef` with the initial counter value. Implement a button that, when clicked, increments the counter and logs the previous counter value stored in `prevValueRef.current` to the console. Update the `prevValueRef.current` with the new counter value after logging."
            ]
        },
        useMemo: {
            name: "useMemo hook",
            categoryForUrl: "react",
            tasks: [
                "Calculate Fibonacci Sequence. Create a functional component called `Fibonacci` that takes a number `n` as a prop. Use the `useMemo` hook to calculate the Fibonacci sequence up to `n`. Display the Fibonacci sequence on the screen.",
                "Filter List. Create a functional component called `FilteredList` that takes an array of items and a filter term as props. Use the `useMemo` hook to filter the list of items based on the filter term. Display the filtered list on the screen.",
                "Sort List. Create a functional component called `SortedList` that takes an array of numbers as a prop. Use the `useMemo` hook to sort the list of numbers in ascending order. Display the sorted list on the screen."
            ]
        },
        useCallback: {
            name: "useCallback hook",
            categoryForUrl: "react",
            tasks: [
                "Click Counter task. Create a functional component called `ClickCounter` that renders a button and a counter. Use the `useCallback` hook to create a memoized click event handler function called `handleClick`. Implement the `handleClick` function to increment the counter state when the button is clicked. Display the current count on the screen.",
                "Debounce Input. Create a functional component called `DebouncedInput` that renders an input field. Use the `useCallback` hook to create a memoized change event handler function called `handleChange`. Implement the `handleChange` function to debounce the user's input by delaying the update to the state variable. Display the current value of the input field on the screen.",
                "Fetch Data. Create a functional component called `DataFetcher` that renders a button and a data display area. Use the `useCallback` hook to create a memoized click event handler function called `handleFetchData`. Implement the `handleFetchData` function to make an API request and update the data state with the fetched data. Display the fetched data on the screen."
            ]
        },
        useReducer: {
            name: "useReducer hook",
            categoryForUrl: "react",
            tasks: [
                "Counter with Increment and Decrement. Create a functional component called `Counter` that renders a counter value and two buttons: one for incrementing and one for decrementing the counter. Use the `useReducer` hook to manage the state of the counter. Implement actions for incrementing and decrementing the counter value in the reducer function. Display the current counter value on the screen and update it when the corresponding buttons are clicked.",
                "Todo List task. Create a functional component called `TodoList` that renders a list of todo items. Use the `useReducer` hook to manage the state of the todo items. Implement actions for adding and removing todo items in the reducer function. Display the list of todo items on the screen and provide input fields and buttons to add and remove items.",
                "Theme Toggle. Create a functional component called `ThemeToggle` that renders a toggle button for switching between light and dark themes. Use the `useReducer` hook to manage the state of the current theme. Implement actions for toggling the theme in the reducer function. Apply the current theme to the component or application using CSS classes or inline styles."
            ]
        },
        conditionalRendering: {
            name: "Conditional Rendering",
            categoryForUrl: "react",
            tasks: [
                "Show/Hide Component. Create a functional component called `ShowHideComponent` that renders a button and a hidden message. Add a state variable called `showMessage` using the `useState` hook, initially set to `false`. Implement a click event handler for the button that toggles the value of `showMessage`. Conditionally render the message component based on the value of `showMessage`.",
                "Login Form. Create a functional component called `LoginForm` that renders a login form with email and password fields. Add state variables for `email` and `password` using the `useState` hook. Implement a submit event handler for the form that checks if both email and password are filled. Conditionally render a success message or an error message based on the form validation.",
                "User Authentication. Create a functional component called `UserAuth` that renders a login form and a welcome message. Add a state variable called `loggedIn` using the `useState` hook, initially set to `false`. Implement a submit event handler for the form that checks the user's credentials. Conditionally render the login form or the welcome message based on the value of `loggedIn`."
            ]
        },
        props: {
            name: "Props - Properties",
            categoryForUrl: "react",
            tasks: [
                "Greeting Component. Create a functional component called `Greeting` that takes a prop called `name`. Render a greeting message that includes the value of the `name` prop. Use the `Greeting` component in your main app component and pass a name value as a prop.",
                "List Component. Create a functional component called `List` that takes a prop called `items`, which is an array of strings. Render an unordered list that contains list items for each item in the `items` prop. Use the `List` component in your main app component and pass an array of items as a prop.",
                "Card Component. Create a functional component called `Card` that takes multiple props such as `title`, `content`, and `imageURL`. Render a card-like component that displays the title, content, and an image using the provided props. Use the `Card` component in your main app component and pass different values for the props."
            ]
        },
        touchableOpacity: {
            name: "TouchableOpacity Component - React Native",
            categoryForUrl: "react",
            tasks: [
                "Button Component. Create a functional component called `Button` that renders a `TouchableOpacity` component with a child text component. Style the `TouchableOpacity` component to give it a button-like appearance. Implement an `onPress` event handler for the `TouchableOpacity` component that logs a message when the button is pressed. Use the `Button` component in your main app component.",
                "Image Gallery. Create a functional component called `ImageGallery` that renders a grid of images using `TouchableOpacity` components. Style the `TouchableOpacity` components to display the images in a visually appealing way. Implement an `onPress` event handler for each `TouchableOpacity` component that opens a modal or navigates to a new screen to display the full-size image. Use the `ImageGallery` component in your main app component.",
                "Toggle Component. Create a functional component called `Toggle` that renders a `TouchableOpacity` component with a child text component. Add a state variable called `isToggled` using the `useState` hook, initially set to `false`. Implement an `onPress` event handler for the `TouchableOpacity` component that toggles the value of `isToggled`. Conditionally style the `TouchableOpacity` component based on the value of `isToggled`. Use the `Toggle` component in your main app component."
            ]
        },
        flatList: {
            name: "FlatList Component - React Native",
            categoryForUrl: "react",
            tasks: [
                "Basic List. Create a functional component called `BasicList` that renders a `FlatList` component. Pass an array of data as the `data` prop to the `FlatList`. Implement a `renderItem` function that defines how each item in the list should be rendered. Use the `BasicList` component in your main app component.",
                "Horizontal List. Create a functional component called `HorizontalList` that renders a horizontal `FlatList` component. Pass an array of data as the `data` prop to the `FlatList`. Set the `horizontal` prop of the `FlatList` to `true`. Implement a `renderItem` function that defines how each item in the list should be rendered horizontally. Use the `HorizontalList` component in your main app component.",
                "Infinite Scroll. Create a functional component called `InfiniteScroll` that renders a `FlatList` component. Pass an array of data as the `data` prop to the `FlatList`. Implement a `renderItem` function that defines how each item in the list should be rendered. Implement a `onEndReached` event handler for the `FlatList` that fetches additional data and appends it to the existing data array. Use the `InfiniteScroll` component in your main app component.",
            ]
        },
        portals: {
            name: "React Portals",
            categoryForUrl: "react",
            tasks: [
                "Modal Component. Create a functional component called `Modal` that renders a modal dialog box. Use a portal to render the `Modal` component's content in a different DOM element, such as the body or a separate div element. Style the modal with CSS to overlay the page and display the content in the center. Use the `Modal` component in your main app component.",
                "Tooltip Component. Create a functional component called `Tooltip` that renders a tooltip with additional information. Use a portal to render the `Tooltip` component's content in a different DOM element, such as a sibling or ancestor. Implement event handlers to show and hide the tooltip when hovering over a specific element. Use the `Tooltip` component in your main app component.",
                "Context Menu. Create a functional component called `ContextMenu` that renders a context menu for a specific element. Use a portal to render the `ContextMenu` component's content in a different DOM element, such as the body or a separate div element. Implement event handlers to show and hide the context menu when right-clicking on the specific element. Use the `ContextMenu` component in your main app component."
            ]
        },
        hoc: {
            name: "Higher Order Components",
            categoryForUrl: "react",
            tasks: [
                "Create a Higher Order Component called `withLoading` that adds a loading state to the wrapped component. Implement a loading state and a loading indicator in the HOC. Wrap a component of your choice with the `withLoading` HOC to display a loading indicator while data is being fetched. Test the HOC by simulating a delay in data fetching.",
                "Create a Higher Order Component called `withAuthentication` that adds authentication logic to the wrapped component. Implement authentication logic such as checking if the user is logged in or has valid credentials. If the user is not authenticated, redirect them to a login page or display an error message. Wrap a component of your choice with the `withAuthentication` HOC to restrict access to authenticated users only. Test the HOC by simulating authentication status changes.",
                "Create a Higher Order Component called `withLogging` that adds logging functionality to the wrapped component. Implement logging logic such as logging component lifecycle events or specific actions. Log relevant information to the console or a logging service. Wrap a component of your choice with the `withLogging` HOC to log its lifecycle events or specific actions. Test the HOC by checking the console or logging service for the logged information."
            ]
        }
    },
    css: {
        selectors: {
            name: "Selectors",
            categoryForUrl: "css",
            tasks: [
                "Identify and apply a CSS selector to change the font color of a specific paragraph element on a webpage.",
                "Create a CSS selector that targets all the anchor tags within a specific div element and apply a different background color to each of them.",
                "Use a CSS selector to target and style all the list items within an unordered list element, changing their font size and adding a border around each item.",
            ]
        },
        float: {
            name: "Float",
            categoryForUrl: "css",
            tasks: [
                "Create a simple HTML layout using the `float` property. Place two elements side by side using the `float: left;` and `float: right;` values respectively. Add some content inside each to visualize the effect of the `float` property.",
                "Apply the `clearfix` technique to a container element that contains floated elements. Create a container and add multiple child elements with the `float: left;` property. Then, apply the clearfix technique to the container to ensure it expands to contain the floated elements.",
                "Use the `clear` property to control the wrapping behavior of elements around a floated element. Create a with some text content and apply the `float: left;` property. Then, create another below the floated element and apply the `clear: left;` property to it. Observe how the second wraps around the floated element."
            ]
        },
        pseudoClass: {
            name: "Pseudo - Classes",
            categoryForUrl: "css",
            tasks: [
                "Create a navigation menu using CSS pseudo-classes. Use an unordered list and apply the `:hover` pseudo-class to change the background color of each list item when the mouse hovers over it. Experiment with different styles and transitions to enhance the interactive experience.",
                "Apply the `:nth-child` pseudo-class to style specific elements in a list. Create an ordered list and use the `:nth-child` pseudo-class to target and style every second or third list item differently. For example, you can change the font color or add a background color to alternate list items.",
                "Use the `:focus` pseudo-class to style form elements when they receive focus. Create a simple form with input fields and apply the `:focus` pseudo-class to change the border color or add a box-shadow effect when a user clicks or focuses on an input field."
            ]
        },
        boxSizing: {
            name: "box-sizing property",
            categoryForUrl: "css",
            tasks: [
                "Create a simple layout using the `box-sizing` property. Take a container and add multiple child elements with different widths and heights. Apply the `box-sizing: content-box;` property to the container and observe how the width and height of the container are affected by the content and padding.",
                "Apply the `box-sizing` property to create a border-box layout. Create another container and add child elements with different widths and heights. Apply the `box-sizing: border-box;` property to the container and observe how the width and height of the container are affected by the content, padding, and border.",
                "Use the `box-sizing` property to create a responsive layout. Create a responsive grid layout using CSS Flexbox or CSS Grid. Apply the `box-sizing: border-box;` property to the grid container and set the width and height of the grid items using percentage values. Test the responsiveness of the layout by resizing the browser window and observe how the grid items adjust their sizes while considering the padding and border."
            ]
        },
        position: {
            name: "Position",
            categoryForUrl: "css",
            tasks: [
                "Create a fixed position element. Take a element and apply the `position: fixed;` property to it. Set the top and left values to position the element on the screen. Experiment with different values to see how the element remains fixed in its position even when scrolling.",
                "Use the `position` property to create an absolutely positioned element. Create another element and apply the `position: absolute;` property to it. Set the top, left, right, or bottom values to position the element relative to its closest positioned ancestor. Experiment with different values to see how the element is positioned within the document flow.",
                "Apply the `position` property to create a relatively positioned element. Create a third element and apply the `position: relative;` property to it. Set the top, left, right, or bottom values to position the element relative to its original position in the document flow. Experiment with different values to see how the element is positioned and how it affects nearby elements."
            ]
        },
        pseudoElement: {
            name: "Pseudo - Elements",
            categoryForUrl: "css",
            tasks: [
                "Create a custom tooltip using a pseudo-element. Take an element and apply the `::before` or `::after` pseudo-element to it. Use CSS to style the pseudo-element and position it relative to the parent element. Add content to the pseudo-element to display the tooltip when hovering over the parent element.",
                "Apply a decorative element using a pseudo-element. Choose an element, like a heading and apply the `::before` or `::after` pseudo-element to it. Use CSS to style the pseudo-element and add decorative content, such as an icon or decorative lines, to enhance the visual appearance of the heading.",
                "Use a pseudo-element to create a drop cap effect. Select a paragraph element and apply the `::first-letter` pseudo-element to it. Use CSS to style the pseudo-element and make the first letter of the paragraph larger, change its color, or add other decorative effects to create a drop cap effect."
            ]
        },
        flexbox: {
            name: "Flexbox",
            categoryForUrl: "css",
            tasks: [
                "Create a simple flex container and add three child elements inside it. Apply different flex properties to each child element (e.g., `flex-grow`, `flex-shrink`, `flex-basis`) and observe how the layout changes.",
                "Build a navigation bar using flexbox. Create a flex container and add a few navigation links inside it. Style the navigation bar using flex properties such as `justify-content` and `align-items` to align the links horizontally or vertically.",
                "Design a responsive card layout using flexbox. Create a flex container and add multiple card elements inside it. Apply flex properties to make the cards stack horizontally on larger screens and stack vertically on smaller screens.",
            ]
        },
        grid: {
            name: "Grid",
            categoryForUrl: "css",
            tasks: [
                "Create a basic grid layout with three columns and three rows. Add content to each grid cell and apply different properties such as `grid-template-columns` and `grid-template-rows` to define the grid structure.",
                "Design a responsive image gallery using the `grid` layout. Create a grid container and add multiple image elements inside it. Use properties like `grid-column` and `grid-row` to position and arrange the images within the grid.",
                "Implement a grid-based form layout. Create a grid container and add form elements such as input fields and labels inside it. Use properties like `grid-area` and `grid-template-areas` to define the layout and align the form elements accordingly."
            ]
        }
    },
    javascript: {
        anonymousFunction: {
            name: "Anonymous Function",
            categoryForUrl: "javascript",
            tasks: [
                "Create an anonymous function that takes two parameters, `a` and `b`, and returns their sum. Assign this function to a variable and call it with different arguments to test its functionality.",
                "Rewrite an existing named function as an anonymous function. Take any simple function you have written before and convert it into an anonymous function. Call the anonymous function and ensure it produces the same result as the original named function.",
                "Use an anonymous function as a callback. Take any built-in JavaScript function that accepts a callback, such as `setTimeout()` or `addEventListener()`, and replace the callback function with an anonymous function. Observe the behavior and ensure the desired functionality is maintained."
            ]
        },
        closure: {
            name: "Closure",
            categoryForUrl: "javascript",
            tasks: [
                "Write a function that demonstrates the concept of closure. The function should have an inner function that accesses a variable defined in the outer function. Test the function by calling the inner function and observing the output.",
                "Create a closure that increments a counter variable each time it is called. Write a function that returns this closure and test it by calling the returned function multiple times to see the counter increment.",
                "Implement a closure that creates a private variable and exposes two public functions: one to set the value of the private variable and another to get the value. Test the closure by setting and getting the value of the private variable."
            ]
        },
        eventDelegation: {
            name: "Event Delegation",
            categoryForUrl: "javascript",
            tasks: [
                "Create a list of elements dynamically using JavaScript. Attach a single event listener to the parent element and handle the event when any of the child elements are clicked. Test the functionality by logging a message to the console when a child element is clicked.",
                "Implement a dropdown menu using event delegation. Attach an event listener to the parent element and show/hide the dropdown menu when a specific trigger element is clicked. Test the functionality by toggling the visibility of the dropdown menu.",
                "Build a simple image gallery using event delegation. Attach an event listener to the parent container and handle the event when any of the images are clicked. Implement a functionality to display the clicked image in a larger view. Test the functionality by clicking on different images and observing the larger view."
            ]
        },
        this: {
            name: "'this' keyword",
            categoryForUrl: "javascript",
            tasks: [
                "Create an object with a method that uses the 'this' keyword to access a property of the object. Call the method and observe the output to understand how 'this' refers to the current object.",
                "Write a function that uses the 'this' keyword inside a constructor function to assign values to object properties. Create multiple instances of the object and observe how 'this' refers to the specific instance being created.",
                "Implement an event handler function that uses the 'this' keyword to refer to the element that triggered the event. Attach the event handler to multiple elements and observe how 'this' changes depending on the element that triggered the event."
            ]
        },
        asyncAwait: {
            name: "'async' and 'await' keywords",
            categoryForUrl: "javascript",
            tasks: [
                "Write a function that fetches data from an API using the 'fetch' function and the 'async/await' syntax. Use the 'await' keyword to wait for the response and then log the data to the console. Test the function by calling it and observing the fetched data.",
                "Create a function that performs multiple asynchronous tasks using the 'async/await' syntax. For example, simulate fetching data from multiple APIs and wait for all the responses to complete before proceeding. Test the function by calling it and ensuring that all the tasks are executed in the correct order.",
                "Implement error handling using 'try/catch' blocks with 'async/await'. Write a function that fetches data from an API, but intentionally introduce an error by providing an incorrect URL. Use a 'try/catch' block to catch the error and log a specific error message to the console. Test the function by calling it with an incorrect URL and verifying that the error is handled correctly."
            ]
        },
        tryCatch: {
            name: "try...catch",
            categoryForUrl: "javascript",
            tasks: [
                "Create a JavaScript function that takes a parameter as input and attempts to convert it to a number using the 'parseInt()' function. Use the 'try-catch' statement to catch any errors that may occur during the conversion process. If an error occurs, output a custom error message. If the conversion is successful, print the converted number to the console.",
                "Write a JavaScript program that prompts the user to enter a string value. Then, using the 'try-catch' statement, attempt to access the length property of the entered string. If an error occurs, display an error message to the user. Otherwise, display the length of the string in the console.",
                "Create a JavaScript function that takes an array as input and attempts to access an element at an index provided as a parameter. Use the 'try-catch' statement to handle any potential errors that may arise from accessing an invalid index. If an error occurs, output a custom error message. If the index is valid, print the corresponding element to the console.",
            ]
        },
        mapFunc: {
            name: "map Method",
            categoryForUrl: "javascript",
            tasks: [
                "Write a program that uses the 'map' function to double each value in an array of numbers. For example, given the array [1, 2, 3, 4], the program should return [2, 4, 6, 8].",
                "Implement a function that utilizes the 'map' function to convert an array of strings to uppercase. The function should take an array of strings as input and return a new array where each string is in uppercase.",
                "Create a program that uses the 'map' function to calculate the square of each element in an array of numbers. For instance, given an input array [2, 4, 6, 8], the program should output [4, 16, 36, 64]."
            ]
        },
        filterFunc: {
            name: "filter Method",
            categoryForUrl: "javascript",
            tasks: [
                "Filtering Odd Numbers. Write a function that takes an array of numbers as input, and uses the 'filter' function to return a new array containing only the odd numbers from the original array. Example Input: [1, 2, 3, 4, 5, 6, 7] Expected Output: [1, 3, 5, 7]",
                "Filtering Strings. Write a function that takes an array of strings as input, and uses the 'filter' function to return a new array containing only the strings with a length greater than or equal to 5. Example Input: ['apple', 'banana', 'kiwi', 'orange', 'grape'] Expected Output: ['apple', 'banana', 'orange]",
                "Filtering Objects. Write a function that takes an array of objects as input, where each object represents a person with properties like name and age. Use the 'filter' function to return a new array containing only the objects where the age is greater than or equal to 18. Example Input: [{name: 'John', age: 20}, {name: 'Jane', age: 16}, {name: 'Harry', age: 25}] Expected Output: [{name: 'John', age: 20}, {name: 'Harry', age: 25}]",
            ]
        },
        reduceFunc: {
            name: "reduce Method",
            categoryForUrl: "javascript",
            tasks: [
                "Write a program in JavaScript that uses the 'reduce()' function to find the sum of all elements in an array. Expected output: Input: [1, 2, 3, 4, 5] Output: 15",
                "Implement a program that uses the 'reduce()' function in JavaScript to flatten a nested array into a single-dimensional array. Expected output: Input: [[1, 2], [3, 4], [5, 6]] Output: [1, 2, 3, 4, 5, 6]",
                "Write a JavaScript program that utilizes the 'reduce()' function to find the maximum value in an array. Expected output: Input: [12, 56, 27, 9, 45, 3] Output: 56"
            ]
        },
        forEachFunc: {
            name: "reduce Method",
            categoryForUrl: "javascript",
            tasks: [
                "Write a JavaScript function that uses the 'forEach' function to iterate over an array of numbers and print each number to the console.",
                "Create an array of objects representing students, where each object has properties for 'name' and 'grade'. Use the 'forEach' function to iterate over the array and print each student's name and grade to the console.",
                "Write a JavaScript function that uses the 'forEach' function to calculate the sum of all numbers in an array and return the result."
            ]
        },
        promise: {
            name: "Promise",
            categoryForUrl: "javascript",
            tasks: [
                "Create a function that uses the Promise object to simulate an asynchronous operation. The function should accept a timeout value in milliseconds and resolve the promise after that timeout.",
                "Implement error handling with the Promise object. Create a function that accepts a number as input and returns a promise. The promise should resolve with the square of the number if it's positive, and reject with an error message if it's negative.",
                "Chaining promises. Create three separate functions, each returning a promise. The first function should generate a random number between 1 and 10, the second function should double that number, and the third function should square the doubled number. Chain these promises together to get the final result."
            ]
        },
        findFunc: {
            name: "find Method",
            categoryForUrl: "javascript",
            tasks: [
                "Create an array of objects, where each object represents a student and contains properties like 'name' and 'age'. Use the 'Array.find' method to find the object representing a student with the name 'John'.",
                "Create an array of numbers. Use the 'Array.find' method to find the first number in the array that is greater than 10.",
                "Create an array of strings. Use the 'Array.find' method to find the first string in the array that has a length greater than 5."
            ]
        },
        includesFunc: {
            name: "includes Method",
            categoryForUrl: "javascript",
            tasks: [
                "Create an array of numbers called 'numbersArray' and assign some random numbers to it. Use the 'Array.includes' method to check if a specific number exists in the array. Print 'Number found!' if the number is present in the array and 'Number not found!' otherwise.",
                "Create an array of strings called 'fruitsArray' and assign some fruit names to it. Prompt the user to enter a fruit name. Use the 'Array.includes' method to check if the entered fruit exists in the array. Display an appropriate message indicating whether the fruit is present or not.",
                "Create an array of objects called 'peopleArray'. Each object should represent a person and have properties like 'name', 'age', and 'hobbies'. Use the 'Array.includes' method to check if a person with a given name exists in the array. If found, print their details (age, hobbies, etc.), otherwise display a message saying that the person was not found."
            ]
        },
        someFunc: {
            name: "some Method",
            categoryForUrl: "javascript",
            tasks: [
                "Write a function that uses the 'Array.some' method to check if any number in the array is greater than 10. Return true if such a number exists, and false otherwise.",
                "Write a function that takes an array of strings as input. Use the 'Array.some' method to check if any string in the array is longer than 5 characters. Return true if such a string exists, and false otherwise.",
                "Create a function that checks if an element is present in an array using the 'Array.some' method. The function should take an array and a target element as input and return true if the target element exists in the array, and false otherwise."
            ]
        },
        everyFunc: {
            name: "every Method",
            categoryForUrl: "javascript",
            tasks: [
                "Implement a function that checks if all elements in an array are even numbers using the 'Array.every' method.",
                "Create a function that checks if all strings in an array have more than 5 characters using the 'Array.every' method.",
                "Write a function that checks if all elements in an array are truthy values using the 'Array.every' method."
            ]
        },
        sortFunc: {
            name: "sort Method",
            categoryForUrl: "javascript",
            tasks: [
                "Sorting Numbers in Ascending Order. Write a function that takes an array of numbers as input and uses the 'Array.sort' method to sort the numbers in ascending order. Return the sorted array. Example: Input: [5, 2, 8, 1, 9] Output: [1, 2, 5, 8, 9]",
                'Sorting Strings in Alphabetical Order. Write a function that takes an array of strings as input and uses the "Array.sort" method to sort the strings in alphabetical order. Return the sorted array. Example: Input: ["banana", "apple", "cherry", "date"] Output: ["apple", "banana", "cherry", "date"]',
                'Sorting Custom Objects based on a Property. Create an array of objects, where each object represents a person with properties like "name" and "age". Write a function that uses the "Array.sort" method to sort the array of objects based on the "age" property in ascending order. Return the sorted array. Example: Input: [{ name: "John", age: 25 }, { name: "Anna", age: 30 }, { name: "Mike", age: 20 }] Output: [{ name: "Mike", age: 20 }, { name: "John", age: 25 }, { name: "Anna", age: 30 }]'
            ]
        },
        sliceFunc: {
            name: "slice Method",
            categoryForUrl: "javascript",
            tasks: [
                "Create a new array using Array.slice(). Create an array with some elements, e.g., ['a', 'b', 'c', 'd', '']. Use the Array.slice() method to create a new array containing only elements from index 2 to index 4. Print the new array to see the result.",
                "Extract a copy of an array using Array.slice(). Create an array with some elements, e.g., ['apple', 'banana', 'cherry', 'date']. Use the Array.slice() method to extract a copy of the entire array. Store the result in another variable. Modify the original array by adding or removing elements. Print both the original array and the copied array, observing that they are distinct."
            ]
        },
        spliceFunc: {
            name: "splice Method",
            categoryForUrl: "javascript",
            tasks: [
                "Create an array called 'numbers' with the values [1, 2, 3, 4, 5]. Use the 'Array.splice' method to remove the element at index 2 from the 'numbers' array. Print the modified 'numbers' array to the console.",
                "Create an array called 'fruits' with the values ['apple', 'banana', 'orange']. Use the 'Array.splice' method to add the element 'grape' at index 1 in the 'fruits' array. Print the modified 'fruits' array to the console.",
                "Create an array called 'names' with the values ['John', 'Jane', 'Bob', 'Alice']. Use the 'Array.splice' method to replace the elements at index 1 and index 2 with the elements 'Laura' and 'Mike' respectively. Print the modified 'names' array to the console."
            ]
        }
    },
    angular: {
        module: {
            name: "Module",
            categoryForUrl: "angular",
            tasks: [
                'Create a new Angular module called "ShoppingCart". This module should have a single component called "CartComponent" which displays the items added to the shopping cart. Initialize this module and component in your Angular application.',
                'Add a new component called "ProductListComponent" to the "ShoppingCart" module. This component should display a list of products available for purchase. Create a dummy list of products in the component and display them on the page.',
                'Create a service called "CartService" within the "ShoppingCart" module. This service should have methods to add items to the shopping cart and retrieve the items from the cart. Implement these methods and use them in the "CartComponent" to add products to the cart and display the cart items.'
            ]
        },
        service: {
            name: "Service",
            categoryForUrl: "angular",
            tasks: [
                'Create a new Angular service called "MessageService" that will have a method called "sendMessage()" which takes a string parameter and logs it to the console.',
                'Modify an existing Angular component to inject and use the "MessageService" service. Call the "sendMessage()" method with a custom message from within the component, and verify that the message is correctly logged to the console.',
                'Create a new Angular component called "UserService" that will also use the "MessageService" service. Within this component, call the "sendMessage()" method with a different custom message and verify that both messages are correctly logged to the console.'
            ]
        },
        directives: {
            name: "Directives",
            categoryForUrl: "angular",
            tasks: [
                "Create a simple directive that highlights a specific text in a paragraph. The directive should take the text as an input and apply a different background color to that particular text.",
                "Implement a directive that allows you to display a tooltip when hovering over an element. The tooltip content should be passed as an input to the directive and should be displayed when the user hovers over the element.",
            ]
        },
        dependencyInjection: {
            name: "Dependency Injection",
            categoryForUrl: "angular",
            tasks: [
                'Create a new Angular service called "UserService". Inside the UserService, create a constructor that takes a parameter named "httpClient" of type HttpClient. Assign the httpClient parameter to a private member variable called "http". Then, create a method called "getUser()" that makes an HTTP GET request to retrieve user data. Test the implementation by calling the "getUser()" method and logging the response in the console.',
                'Create a new Angular component called "AppComponent". Inside the AppComponent, use dependency injection to inject an instance of the "UserService" you created in Task 1. Call the "getUser()" method from the injected UserService and store the user data in a variable called "user". Display the user data on the HTML template of AppComponent.'
            ]
        },
        pipes: {
            name: "Pipes",
            categoryForUrl: "angular",
            tasks: [
                'Create a simple Angular component that displays a list of names using the *ngFor directive. Use the names array: ["John", "Jane", "Adam", "Emily"] Use an Angular pipe to transform the names to uppercase before displaying them on the screen. Hint: Utilize the built-in uppercase pipe in Angular.',
                'Implement a custom pipe in Angular that filters an array of numbers and returns only even numbers. Create a component with an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] Implement a custom pipe that filters the numbers array and returns only even numbers. Display the filtered even numbers using the custom pipe in your Angular template.',
                'Create a component that displays a date in a specific format using the Angular DatePipe. Create a Date object containing the current date and time. Use the Angular DatePipe to format the date in the format "dd/MM/yyyy HH:mm:ss". Display the formatted date in your Angular component template. Hint: Import the DatePipe from "@angular/common" and inject it into your component.'
            ]
        },
        ngIfngFor: {
            name: "*ngIf and *ngFor",
            categoryForUrl: "angular",
            tasks: [
                'Create a basic Angular component that contains a variable called "showMessage" initialized to false. Use ngIf directive to conditionally display a "Hello World!" message in the template if showMessage is true. In the component, provide a button that toggles the value of showMessage on click.',
                'Create an array of fruits in your component with multiple fruit names. Use ngFor directive to iterate over the fruits array and display each fruit name in an unordered list. Ensure that this list gets dynamically updated whenever you add or remove fruits from the array.',
                'Extend the previous task by adding an input box and a button to your component. When the button is clicked, add the value from the input box to the fruits array. Update the template to display the updated fruits list using ngFor.'
            ]
        },
        ngClass: {
            name: "ngClass",
            categoryForUrl: "angular",
            tasks: [
                "Implement a basic Angular ngClass directive to dynamically apply a specific CSS class based on a condition. Create a new HTML element and assign it a class based on a specific condition using ngClass. The condition should be based on some defined variable. Test and observe the changes when the value of the variable changes.",
                "Use Angular ngClass to style elements dynamically based on multiple conditions. Create multiple variables and assign them different values based on different conditions. Apply different CSS classes to different elements using ngClass and the previously defined variables. Test and observe how the elements are styled based on the conditions."
            ]
        },
        ngStyle: {
            name: "ngStyle",
            categoryForUrl: "angular",
            tasks: [
                "Create a basic Angular application with an input field and a button. Implement functionality using ngStyle where the user enters a color in the input field, and clicking on the button changes the background color of a specific element on the page based on the entered color.",
                "Build a simple Angular component that displays a list of items. Use ngStyle to apply different styles to each item based on a specific condition. For example, if the item is marked as completed, style it with a strikethrough text decoration and a different background color."
            ]
        }
    }
};

export default tasks;