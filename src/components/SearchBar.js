import React from 'react';

class SearchBar extends React.Component{
    state = {term: ""};

    onFormSubmit = (e) => {
      e.preventDefault();

      this.props.onSubmit(this.state.term);
    }

    render(){
        return(
          <div>
          <h1 class="ui header">Pic Finder</h1>
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Image Search</label>
                  <input 
                    type="text"
                    placeholder="Search here..." 
                    value={this.state.term} 
                    onChange={(e)=> this.setState({term: e.target.value})} />
              </div>
            </form>
          </div>
          </div>
        );
    }
}

export default SearchBar;