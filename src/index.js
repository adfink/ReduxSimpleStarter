import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCoBIwwOPteQYC9c3Dqcj6ZlALpzfjY0C0";


// create a new component that should produce some html

const App = () => {
    return(
       <div>
         <SearchBar />
       </div>;
    );
}

// take this component's generated html and put in on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
