import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Home.css';
// import Results from './components/Results/index.js'
let placeholder = '';
const randomPhrases = [
  "I'm not racist, but I think affirmative action is reverse racism.",
  "You're so beautiful for a black woman.",
  "Is your dad a gardner?",
  "What you two aren't related? You all look the same to me.",
]

class Home extends Component {
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
          <h1 class="phrase-header">Enter Sentence or Phrase</h1>
          <textarea rows="10" cols="50" className="phrase-area" placeholder={placeholder}>
          </textarea>
          <button className="primary btn-large">Submit</button>
        </div>
      </div>
      </Router>
    );
  }
}

export default Home;
