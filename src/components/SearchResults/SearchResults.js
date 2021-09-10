import React from "react";
import API from "../utils/API"

class Search extends React.Component {

    constructor(props){
        super(props);
    }
    state = {
        search: "",
        searchedEmployees: []
    }

    searchGiphy = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.data }))
          .catch(err => console.log(err));
      };

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });    
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGiphy(this.state.search);
      };

    render () {
            return (

                <form className="d-flex">          
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => this.props.handleInputSearch(event)}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

            )
        }
}

export default Search;