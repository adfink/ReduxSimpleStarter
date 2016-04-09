import React from 'react';
import ReactDOM from 'react-dom';
// create a new component that should produce some html

const App = () => {
    return <div>Hi!</div>;
}

// take this component's generated html and put in on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
