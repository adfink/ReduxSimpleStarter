import React from 'react';

// class based component

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render(){

    return (
      <div>
        <input
          value = {this.state.term}
         onChange={ event =>  this.setState({term: event.target.value})} />
         The current state term is : {this.state.term}
      </div>
   )
  }


}









// functional component
// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;
