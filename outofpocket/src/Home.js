import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { browserHistory } from "react-router";
import { push } from 'react-router-redux';
import './Home.css';
import Results from './components/Results';
let results = false;
let placeholder = '';
let response = '';
const randomPhrases = [
  "I'm not racist, but I think affirmative action is reverse racism.",
  "You're so beautiful for a black woman.",
  "Is your dad a gardner?",
  "What you two aren't related? You all look the same to me.",
]

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // Sends the phrase to the backend
    // Jumps to the results page
    var myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');
    fetch('http://127.0.0.1:5000', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ "text": "You don't belong here" })
    }).then((res) => {
      console.log('waddup');
      console.log(res.json());
      response = res;
    });

    console.log({ prompt: this.state.value });
    console.log(this.state.value);
    results = !results;
    this.forceUpdate();
  }

  randomPlaceholder = () => {
    placeholder = randomPhrases[Math.floor(Math.random() * (randomPhrases.length))];
  }
  render() {
    this.randomPlaceholder();
    console.log(window.location.pathname);
    if (window.location.pathname === '/results') {
      results = true;
    }
    if (!results) {
      return (
        <Router>
        <div className="container--fluid column">
          <div className="blue header container--fluid column">
            <h1>Out of Pocket</h1>
            <h6>A problematic language processing program</h6>
          </div>
          <div className="container--fluid column center-container phrase-container">
            <h1 className="phrase-header">Enter Sentence or Phrase</h1>
            <textarea rows="10" cols="50" className="phrase-area" placeholder={placeholder} value={this.state.value} onChange={this.handleChange}>
            </textarea>
            <Link to="/results" className="primary btn-large submit" onClick={this.handleSubmit}>Submit</Link>
          </div>

        </div>
        </Router>
      );
    } else {
      return (
        /*<Router>
          <Route path="/results" component={Results}/>
        </Router>*/
        <Results prompt={this.state.value}/>
      )
    }
  }
}

export default Home;
