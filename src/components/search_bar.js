import React from 'react';

// class based component

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render(){

    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
         onChange={ event =>  this.onInputChange(event.target.value)} />
         The current state term is : {this.state.term}
      </div>
   )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term); 
  }


}









// functional component
// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;
