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
    //get
  getRepos(){
    $.ajax({
      url: 'http://localhost:1128/repos',
      type: 'GET',
      success: (repos) => { console.log('get request success: ', repos),
        this.setState({
          repos: repos
        })

      },
      error: (err) => console.log('get request failed: ', err)
    })
  }
  componentDidMount() {
    this.getRepos();
  }

  search (term) {
   // console.log(`${term} was searched`);
    // TODO post
    $.ajax({
      url: 'http://localhost:1128/repos',
      //dataType: 'text',
      type: 'POST',
      data: {term},
      success: (data) => {console.log('post request success: ', data);
      this.getRepos();
      },
      error: (err, err2, err3) => console.log('post request failed: ' , err2, err3),

      //finally: (data) => console.log('finally:', data)
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