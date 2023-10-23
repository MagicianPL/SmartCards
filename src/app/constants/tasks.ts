const tasks = {
    react: {
        functionalNClassDiff: {
            name: "Functional and Class Components",
            tasks: [
                "Create a new functional component called `Greeting` that takes a `name` prop and displays a greeting message with the name. Render the `Greeting` component in your main App component, passing in a name prop of your choice.",
                "Create a new class component called `Counter` that has a state variable `count` initialized to 0. Implement a button that, when clicked, increments the `count` state by 1. Render the `count` value and the button in your main App component.",
                "Convert a functional component to a class component. Take the `Greeting` component you created in task 1 and convert it into a class component. Set up a state variable `message` in the class component and initialize it with a greeting message using the `name` prop. Update the `render` method to display the `message` state instead of directly displaying the greeting message."
            ]
        },
        useEffect: {
            name: "useEffect hook",
            tasks: [
                "Task - Fetch Data and Update State. Create a functional component called `UserList` that fetches a list of users from an API and stores them in a state variable called `users`. Use the `useEffect` hook to perform the data fetching inside the component. Make sure you include an empty dependency array `[]` to ensure it only runs once when the component mounts. Display the list of users on the screen.",
                "Update Title based on State. Create a component called `Counter` that initializes a counter state variable (useState). Use the `useEffect` hook to update the document title with the current counter value. Make sure you include the `counter` state variable in the dependency array. Add buttons to increment and decrement the counter value, and display the updated counter on the screen.",
                "Cleanup Function task. Create a functional component called `MousePosition` that displays the current x and y coordinates of the mouse cursor. Use the `useEffect` hook to add an event listener to track mouse movements on the document. Update the state variables `x` and `y` with the current mouse coordinates. Return a cleanup function from the `useEffect` hook to remove the event listener when the component unmounts."
            ]
        },
        useState: {
            name: "useState hook",
            tasks: [
                "Toggle Button. Create a functional component called `ToggleButton` that renders a button. Use the `useState` hook to initialize a state variable called `isOn` to `false`. Implement an `onClick` event handler for the button that toggles the value of `isOn` between `true` and `false`. Display the current value of `isOn` on the button.",
                "Input Field task. Create a functional component called `InputField` that renders an input field. Use the `useState` hook to initialize a state variable called `inputValue` to an empty string. Implement an `onChange` event handler for the input field that updates the value of `inputValue` with the user's input. Display the current value of `inputValue` below the input field.",
                "Counter task. Create a functional component called `Counter` that renders a counter. Use the `useState` hook to initialize a state variable called `count` to `0`. Implement two buttons: one for incrementing the count and one for decrementing the count. Implement event handlers for the buttons that update the value of `count` accordingly. Display the current value of `count` on the screen."
            ]
        },
        useContext: {
            name: "useContext hook",
            tasks: [
                "This is Theme Context task. Create a new context called `ThemeContext` using the `createContext` function. Inside the `ThemeContext`, define a state variable `theme` and a function `toggleTheme` to toggle between light and dark themes. Create a functional component called `App` that wraps its children with the `ThemeContext.Provider`, providing the `theme` state and `toggleTheme` function as values. Create two child components: `Header` and `Button`. In the `Header` component, consume the `theme` value from the `ThemeContext` and display a message based on the current theme. In the `Button` component, consume the `toggleTheme` function from the `ThemeContext` and implement a button that toggles the theme when clicked.",
                "User Context task. Create a new context called `UserContext` using the `createContext` function. Inside the `UserContext`, define a state variable `user` with an initial value of `null` and a function `setUser` to update the user. Create a functional component called `App` that wraps its children with the `UserContext.Provider`, providing the `user` state and `setUser` function as values. Create two child components: `LoginForm` and `UserProfile`. In the `LoginForm` component, consume the `setUser` function from the `UserContext` and implement a form that updates the user when submitted. In the `UserProfile` component, consume the `user` value from the `UserContext` and display the user's profile information.",
                "Localization Context. Create a new context called `LocalizationContext` using the `createContext` function. Inside the `LocalizationContext`, define a state variable `locale` and a function `setLocale` to change the current locale. Create a functional component called `App` that wraps its children with the `LocalizationContext.Provider`, providing the `locale` state and `setLocale` function as values. Create two child components: `WelcomeMessage` and `LanguageSelector`. In the `WelcomeMessage` component, consume the `locale` value from the `LocalizationContext` and display a welcome message based on the current locale. In the `LanguageSelector` component, consume the `setLocale` function from the `LocalizationContext` and implement a dropdown menu to select the desired locale."
            ]
        },
        useRef: {
            name: "useRef hook",
            tasks: [
                "Create a functional component called `InputField` that renders an input field. Use the `useRef` hook to create a ref variable called `inputRef`. Attach the `inputRef` to the input field using the `ref` attribute. Implement a button that, when clicked, focuses the input field using the `inputRef.current.focus()` method.",
                "Measure Element Height. Create a functional component called `Box` that renders a div element. Use the `useRef` hook to create a ref variable called `boxRef`. Attach the `boxRef` to the div element using the `ref` attribute. Implement a button that, when clicked, logs the height of the `boxRef.current.offsetHeight` to the console.",
                "Store Previous Value. Create a functional component called `Counter` that renders a counter. Use the `useRef` hook to create a ref variable called `prevValueRef`. Initialize the `prevValueRef` with the initial counter value. Implement a button that, when clicked, increments the counter and logs the previous counter value stored in `prevValueRef.current` to the console. Update the `prevValueRef.current` with the new counter value after logging."
            ]
        },
        useMemo: {
            name: "useMemo hook",
            tasks: [
                "Calculate Fibonacci Sequence. Create a functional component called `Fibonacci` that takes a number `n` as a prop. Use the `useMemo` hook to calculate the Fibonacci sequence up to `n`. Display the Fibonacci sequence on the screen.",
                "Filter List. Create a functional component called `FilteredList` that takes an array of items and a filter term as props. Use the `useMemo` hook to filter the list of items based on the filter term. Display the filtered list on the screen.",
                "Sort List. Create a functional component called `SortedList` that takes an array of numbers as a prop. Use the `useMemo` hook to sort the list of numbers in ascending order. Display the sorted list on the screen."
            ]
        },
        useCallback: {
            name: "useCallback hook",
            tasks: [
                "Click Counter task. Create a functional component called `ClickCounter` that renders a button and a counter. Use the `useCallback` hook to create a memoized click event handler function called `handleClick`. Implement the `handleClick` function to increment the counter state when the button is clicked. Display the current count on the screen.",
                "Debounce Input. Create a functional component called `DebouncedInput` that renders an input field. Use the `useCallback` hook to create a memoized change event handler function called `handleChange`. Implement the `handleChange` function to debounce the user's input by delaying the update to the state variable. Display the current value of the input field on the screen.",
                "Fetch Data. Create a functional component called `DataFetcher` that renders a button and a data display area. Use the `useCallback` hook to create a memoized click event handler function called `handleFetchData`. Implement the `handleFetchData` function to make an API request and update the data state with the fetched data. Display the fetched data on the screen."
            ]
        },
        useReducer: {
            name: "useReducer hook",
            tasks: [
                "Counter with Increment and Decrement. Create a functional component called `Counter` that renders a counter value and two buttons: one for incrementing and one for decrementing the counter. Use the `useReducer` hook to manage the state of the counter. Implement actions for incrementing and decrementing the counter value in the reducer function. Display the current counter value on the screen and update it when the corresponding buttons are clicked.",
                "Todo List task. Create a functional component called `TodoList` that renders a list of todo items. Use the `useReducer` hook to manage the state of the todo items. Implement actions for adding and removing todo items in the reducer function. Display the list of todo items on the screen and provide input fields and buttons to add and remove items.",
                "Theme Toggle. Create a functional component called `ThemeToggle` that renders a toggle button for switching between light and dark themes. Use the `useReducer` hook to manage the state of the current theme. Implement actions for toggling the theme in the reducer function. Apply the current theme to the component or application using CSS classes or inline styles."
            ]
        },
        conditionalRendering: {
            name: "Conditional Rendering",
            tasks: [
                "Show/Hide Component. Create a functional component called `ShowHideComponent` that renders a button and a hidden message. Add a state variable called `showMessage` using the `useState` hook, initially set to `false`. Implement a click event handler for the button that toggles the value of `showMessage`. Conditionally render the message component based on the value of `showMessage`.",
                "Login Form. Create a functional component called `LoginForm` that renders a login form with email and password fields. Add state variables for `email` and `password` using the `useState` hook. Implement a submit event handler for the form that checks if both email and password are filled. Conditionally render a success message or an error message based on the form validation.",
                "User Authentication. Create a functional component called `UserAuth` that renders a login form and a welcome message. Add a state variable called `loggedIn` using the `useState` hook, initially set to `false`. Implement a submit event handler for the form that checks the user's credentials. Conditionally render the login form or the welcome message based on the value of `loggedIn`."
            ]
        },
        props: {
            name: "Props (Properties)",
            tasks: [
                "Greeting Component. Create a functional component called `Greeting` that takes a prop called `name`. Render a greeting message that includes the value of the `name` prop. Use the `Greeting` component in your main app component and pass a name value as a prop.",
                "List Component. Create a functional component called `List` that takes a prop called `items`, which is an array of strings. Render an unordered list that contains list items for each item in the `items` prop. Use the `List` component in your main app component and pass an array of items as a prop.",
                "Card Component. Create a functional component called `Card` that takes multiple props such as `title`, `content`, and `imageURL`. Render a card-like component that displays the title, content, and an image using the provided props. Use the `Card` component in your main app component and pass different values for the props."
            ]
        },
        touchableOpacity: {
            name: "TouchableOpacity Component (React Native)",
            tasks: [
                "Button Component. Create a functional component called `Button` that renders a `TouchableOpacity` component with a child text component. Style the `TouchableOpacity` component to give it a button-like appearance. Implement an `onPress` event handler for the `TouchableOpacity` component that logs a message when the button is pressed. Use the `Button` component in your main app component.",
                "Image Gallery. Create a functional component called `ImageGallery` that renders a grid of images using `TouchableOpacity` components. Style the `TouchableOpacity` components to display the images in a visually appealing way. Implement an `onPress` event handler for each `TouchableOpacity` component that opens a modal or navigates to a new screen to display the full-size image. Use the `ImageGallery` component in your main app component.",
                "Toggle Component. Create a functional component called `Toggle` that renders a `TouchableOpacity` component with a child text component. Add a state variable called `isToggled` using the `useState` hook, initially set to `false`. Implement an `onPress` event handler for the `TouchableOpacity` component that toggles the value of `isToggled`. Conditionally style the `TouchableOpacity` component based on the value of `isToggled`. Use the `Toggle` component in your main app component."
            ]
        },
        flatList: {
            name: "FlatList Component (React Native)",
            tasks: [
                "Basic List. Create a functional component called `BasicList` that renders a `FlatList` component. Pass an array of data as the `data` prop to the `FlatList`. Implement a `renderItem` function that defines how each item in the list should be rendered. Use the `BasicList` component in your main app component.",
                "Horizontal List. Create a functional component called `HorizontalList` that renders a horizontal `FlatList` component. Pass an array of data as the `data` prop to the `FlatList`. Set the `horizontal` prop of the `FlatList` to `true`. Implement a `renderItem` function that defines how each item in the list should be rendered horizontally. Use the `HorizontalList` component in your main app component.",
                "Infinite Scroll. Create a functional component called `InfiniteScroll` that renders a `FlatList` component. Pass an array of data as the `data` prop to the `FlatList`. Implement a `renderItem` function that defines how each item in the list should be rendered. Implement a `onEndReached` event handler for the `FlatList` that fetches additional data and appends it to the existing data array. Use the `InfiniteScroll` component in your main app component.",
            ]
        },
        portals: {
            name: "React Portals",
            tasks: [
                "Modal Component. Create a functional component called `Modal` that renders a modal dialog box. Use a portal to render the `Modal` component's content in a different DOM element, such as the body or a separate div element. Style the modal with CSS to overlay the page and display the content in the center. Use the `Modal` component in your main app component.",
                "Tooltip Component. Create a functional component called `Tooltip` that renders a tooltip with additional information. Use a portal to render the `Tooltip` component's content in a different DOM element, such as a sibling or ancestor. Implement event handlers to show and hide the tooltip when hovering over a specific element. Use the `Tooltip` component in your main app component.",
                "Context Menu. Create a functional component called `ContextMenu` that renders a context menu for a specific element. Use a portal to render the `ContextMenu` component's content in a different DOM element, such as the body or a separate div element. Implement event handlers to show and hide the context menu when right-clicking on the specific element. Use the `ContextMenu` component in your main app component."
            ]
        },
        hoc: {
            name: "Higher Order Components",
            tasks: [
                "Create a Higher Order Component called `withLoading` that adds a loading state to the wrapped component. Implement a loading state and a loading indicator in the HOC. Wrap a component of your choice with the `withLoading` HOC to display a loading indicator while data is being fetched. Test the HOC by simulating a delay in data fetching.",
                "Create a Higher Order Component called `withAuthentication` that adds authentication logic to the wrapped component. Implement authentication logic such as checking if the user is logged in or has valid credentials. If the user is not authenticated, redirect them to a login page or display an error message. Wrap a component of your choice with the `withAuthentication` HOC to restrict access to authenticated users only. Test the HOC by simulating authentication status changes.",
                "Create a Higher Order Component called `withLogging` that adds logging functionality to the wrapped component. Implement logging logic such as logging component lifecycle events or specific actions. Log relevant information to the console or a logging service. Wrap a component of your choice with the `withLogging` HOC to log its lifecycle events or specific actions. Test the HOC by checking the console or logging service for the logged information."
            ]
        }
    }
};

export default tasks;