import React, {Component} from 'react';
import SearchForm from './searchForm';
import Rx from 'rxjs/Rx';
import {isEmpty} from 'ramda'

import '../styles/app.css';

class App extends Component {
  state = {
    searchTerm: '',
    searchResults: undefined,
    inProgress: false
  };

  onTextChange = evt => {
    this.setState({searchTerm: evt.target.value});
  };

  onSearch = evt => {
    evt.preventDefault();
    const that = this
    const {searchTerm} = this.state;
    this.setState({inProgress: true, searchResults: undefined});
    Rx.Observable.of(searchTerm)
      .flatMap(searchTerm => {
        return Rx.Observable.fromPromise(
          fetch(`/api/repositories/search/${encodeURIComponent(searchTerm)}`)
            .then(resp => resp.json())
        ).catch(response => {
          that.setState({message: response.statusText, inProgress: false});
          return Rx.Observable.empty();
        });
      })
      .subscribe(function(resp) {
        that.setState({searchResults: resp.repositories, searchTerm: '', inProgress: false });
      });
  };

  render() {
    const githubLogo = require('../images/github.png');
    const {searchTerm, searchResults, inProgress} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src={githubLogo} alt="Github" />
          <h2>Welcome to Git Example</h2>
        </div>
        <SearchForm
          onSearch={this.onSearch}
          searchTerm={searchTerm}
          onTextChange={this.onTextChange}
        />
        {searchResults && <ListContainer searchResults={searchResults} />}
        {inProgress && <span>Loading.....</span>}
      </div>
    );
  }
}

const ListContainer = ({searchResults}) => {
  if (isEmpty(searchResults)) {
    return <span className="empty">No Results Found</span>
  }
  return <div>
    {searchResults.map(r => <ListItem repository={r} key={r.id} />)}
  </div>
}

const ListItem = ({repository: { full_name,watchers, stargazers_count  }}) => {
  return <div className="tile">
    <h1>Name: {full_name}</h1>
    <p>watchers: {watchers}</p>
    <p>stars: {stargazers_count}</p>
  </div>
}

export default App;
