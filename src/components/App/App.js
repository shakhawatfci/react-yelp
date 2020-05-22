/* eslint-disable */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'; 
import SearchBar from '../SearchBar/SearchBar'; 
import  Yelp  from '../../util/Yelp';



class  App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = { 
      businesses : [],
      isLoading : false
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(terms,location,sortBy){
    this.setState({ isLoading : true });
   Yelp.search(terms,location,sortBy)
   .then(businesses => {
     this.setState({ businesses : businesses });
     this.setState({ isLoading : false });
   });
  }
  render(){
    return (
      <div className="App">
      <h1>Dev Kitchen</h1>
      <SearchBar searchYelp={this.searchYelp} searchLoading={this.state.isLoading} />
      <BusinessList businesses={this.state.businesses} />
    </div>
    );
  }

}

export default App;
