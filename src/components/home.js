import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {

// Cambio de función anónima a método del componente así maneja el contexto (this) de manera automática
   handleSearchBarSubmit(query) {
     console.log('trying to handle submit for query', query);
     this.props.history.push('/results');
  }
  render() {
    return (
      <div className='app'>
        
        <div>
          <Logo/>

          {/* Pasamos función handleSearchBarSubmit a través de la prop onSubmitB
          <SearchBar onSubmit={function(query) {this.handleSearchBarSubmit(query)}} />
          mejor con arrow function:*/
          }
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/> 

          <RecentPosts/>
        </div>




        
      </div>
    );
  }
}
