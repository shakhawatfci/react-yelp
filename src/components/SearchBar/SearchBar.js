/* eslint-disable */
import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            terms : '',
            location : '',
            sortBy : 'best_match'
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    //   local variable 
       this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        
    }

    getSortByClass(sortByOption){
     return this.state.sortBy === sortByOption ? 'active' : '';
    }

    handleSortByChange(sortByOption)
    {

        this.setState({ sortBy : sortByOption });

    }

    handleTermChange(event){
     this.setState({ terms : event.target.value });
    }

    handleLocationChange(event){
    this.setState({ location : event.target.value });
    }

    handleSearch(event){
        
        this.props.searchYelp(this.state.terms,this.state.location,this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions()
    {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let  sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} 
              onClick={this.handleSortByChange.bind(this,sortByOptionValue)}
            key={sortByOptionValue}>{sortByOption}</li>;
        });
    }
    render()
    {
        return (
            <div className="SearchBar">
                <form onSubmit={this.handleSearch}>
            <div className="SearchBar-sort-options">
                <ul>
                { this.renderSortByOptions() }
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <button type="submit" onClick={this.handleSearch}> { this.props.searchLoading ? 'Searching...'  :  'Let\'s Go' } </button>
            </div>
            </form>
            </div>
        );
    }

}

export default SearchBar;