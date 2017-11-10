import React from 'react';
//make this dynamic
const RepoList = (props) => (

  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

  	<div>
  	  {props.repos.map(repo => (
  	   <div className="repo" key={repo.id}>
  	   <img src={repo.owner} alt="repos" width="50" height="50"/>
  	     <p><a href = {repo.html_url}>{repo.html_url}</a></p>
  	   </div>
  	  ))}
    </div>

  </div>
)

export default RepoList;




















