import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='w-[80%] mx-auto my-[130px] '>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='btn btn-primary text-white mb-10' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className='grid gap-10' ref={ref}>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between uncontrolled and controlled components </h2>
                        <p>In React, a controlled component is a component whose state is managed by React, while an uncontrolled component is a component whose state is managed by the component itself, without any intervention from React.
                            <br />
                            <br />
                            With controlled components, React manages the state of the component and provides the current state and a callback to update the state via props. The component only renders based on the state passed down via props. This means that the component has no internal state, and its state is fully controlled by the parent component.
                            <br />
                            <br />
                            On the other hand, uncontrolled components manage their own state internally through the DOM. This means that the component has its own internal state, and the parent component does not have any control over it. Typically, this is done through refs or other similar mechanisms. This approach is usually used when you don't need to modify the component state dynamically.
                            <br />
                            <br />
                            In general, controlled components provide better control and predictability, while uncontrolled components are simpler to use and manage, especially in cases where you do not need to update the component state dynamically.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How to validate React props using PropTypes write this as a blog </h2>
                        <p>
                            Validating React props using PropTypes is an important step in ensuring that your React components receive the expected data types and values. It is a useful tool for catching errors and bugs early in the development process. In this blog post, we will discuss how to use PropTypes to validate React props.
                            <br />
                            <br />
                            What is PropTypes?
                            <br />
                            <br />
                            PropTypes is a typechecking library that is included with React. It provides a way to validate the types of props passed to a React component at runtime. PropTypes can be used to check that the props have the expected data type and value.
                            <br />
                            <br />
                            How to use PropTypes
                            <br />
                            <br />
                            To use PropTypes, you need to import it from the 'prop-types' library.Once you have imported PropTypes, you can define the expected props for your component. To do this, you need to add a propTypes property to your component and define the expected props using the PropTypes library.
                            <br />
                            <br />
                            In this blog post, we have discussed how to use PropTypes to validate React props. PropTypes is a useful tool for catching errors and bugs early in the development process and can help ensure that your React components receive the expected data types and values. Remember to import the PropTypes library and define the expected props for your component using the PropTypes library.
                        </p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">what is the difference between nodejs and express js. </h2>
                        <p>
                            Node.js is an open-source, cross-platform, server-side JavaScript runtime environment that allows developers to build server-side applications using JavaScript. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                            <br />
                            <br />
                            Express.js, on the other hand, is a web framework built on top of Node.js that simplifies the process of building web applications and APIs. It provides a robust set of features for web and mobile applications, such as routing, middleware, templates, and more.
                            <br />
                            <br />
                            To summarize, Node.js is a runtime environment that allows developers to write server-side applications in JavaScript, while Express.js is a web framework that makes it easier to build web applications and APIs using Node.js. Express.js provides a set of features and tools that simplify the process of building web applications on top of Node.js.
                        </p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                        <p>
                            In React, a custom hook is a JavaScript function that starts with the prefix use and allows you to extract component logic into reusable functions. Custom hooks allow you to reuse stateful logic across different components without duplicating code.
                            <br />
                            <br />
                            You may want to create a custom hook in the following scenarios:
                            <br />
                            <br />
                            <ul>
                                <ol>Shareable Logic: If you have a piece of logic that is shared across multiple components, you can create a custom hook to reuse that logic.</ol>
                                <ol>Better Organization: If your component has complex logic, you can extract some of the logic into a custom hook to make your code more organized and easier to read.</ol>
                                <ol>Abstraction: If you want to abstract some functionality to make it easier to use in different contexts, you can create a custom hook.</ol>
                                <ol>Simplification: If you have a lot of logic in a component, you can create a custom hook to simplify the component's code and reduce the complexity of the component.</ol>
                            </ul>
                            <br />
                            <br />
                            Custom hooks follow the same rules as React's built-in hooks. They must start with the use prefix, and they can only be called from within a functional component or another custom hook. Additionally, custom hooks should only be used for reusable stateful logic, not for side effects like API requests or DOM manipulation.
                            <br />
                            <br />
                            By creating custom hooks, you can encapsulate and reuse complex logic across multiple components, leading to more maintainable, modular, and reusable code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;