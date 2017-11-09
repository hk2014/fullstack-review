import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    //get
    $.ajax({
      type: 'GET',
      sucess: (repos) => {
        this.setState({
          repos: repos
        })
      }
    })
  }

  search (term) {
   // console.log(`${term} was searched`);
    // TODO post
    $.ajax({
      url: 'http://127.0.0.1:1128/repos',
      dataType: 'application/json',
      type: 'POST',
      data: {username: JSON.stringify(term)},
      success: (data) => console.log('post request success'),
      error: (err) => console.log('post request failed: ' + err)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));