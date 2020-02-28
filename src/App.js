import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './components/form/form';
import HomePage from './components/Homepage/homepage.pages';
import './App.css';

class App extends Component {
  constructor() {
    super();

  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ monsters: users }));
  // }
  

  render() {
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Switch>
            <Route exact path='/' component={ HomePage }></Route>
            <Route exact path='/userform' component={ Form }></Route>
        </Switch>        
      </div>
    );
  }
}

export default App;
