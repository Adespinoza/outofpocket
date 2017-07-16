import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Home.css';
let placeholder = '';
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
    console.log(this.state.value);
  }

  randomPlaceholder = () => {
    placeholder = randomPhrases[Math.floor(Math.random() * (randomPhrases.length))];
  }
  render() {
    this.randomPlaceholder();
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
          <button type="submit" className="primary btn-large" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
      </Router>
    );
  }
}

export default Home;
