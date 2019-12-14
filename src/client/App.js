import React, { Component } from 'react';
import './styles/app.css';
import Login from './components/login';
import axios from 'axios';

export default class App extends Component {
  state = { username: null };

  /*
  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }
*/
  constructor(props) {
    super(props);
    this.verifyCreds = this.verifyCreds.bind(this);
  }

  render() {
    return (
      <Login
          submitCreds={this.verifyCreds}/>
    );
  }

    verifyCreds(username, password) {
        axios.post('/api/verifyCredentials/', { username, password })
        .then(res => console.log(res));
    }
}
