/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
 */
 
 import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class App extends React.Component {
	
	constructor(){
		super();
		this.state = {
			 data: [],
			 dummy : [
			 {id:1, name:"ravi"},
			 {id:2, name:"raj"}
			 ]
		};
		
	}
	
	
   render() {
    return (
      <div className="App-header"> 
          <p>Learn React</p>
          {this.state.dummy[0].name}		  
		  <ul>
		  
		  </ul>
       
      </div>
    );
  }
}



export default App;