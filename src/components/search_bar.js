import React from 'react';

// class based component

class SearchBar extends React.Component {
  render() {
    return <input onChange={ event => console.log(event.target.value) } />;
  }


}









// functional component
// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;
