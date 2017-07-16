import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
let value = '';

class Results extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
  }

  render() {
    console.log('1');
    console.log(this.props.response);
    console.log('2');
    console.log(this.props.prompt);
    return (
      <div>
        <div className="container--fluid header--small">
          <h1>Out of Pocket</h1>
        </div>
        <div className="container--fluid row">
          <div className="container--left column">
            <h2>Score</h2>
            <h2>88% Problematic</h2>
            <h3>Racism</h3>
            <div className="meter">
              <div id="bar" class="bar animating"></div>
            </div>
            <h3>Homophobic</h3>
            <div className="meter">
              <div id="bar" class="bar animating"></div>
            </div>
            <h3>Sexist</h3>
            <div className="meter">
              <div id="bar" class="bar animating"></div>
            </div>
            <h3>Regligious</h3>
            <div className="meter">
              <div id="bar" class="bar animating"></div>
            </div>
          </div>
          <div className="container--right column">
            <div className="section">
              <h2>Phrase Breakdown</h2>
              <h3>{this.props.prompt}</h3>
            </div>
            <div className="section">
              <h2>Suggestions</h2>
              <ul className="suggestions">
                <li>I'm not completely sure about affirmative action. What do you think about it?</li>
                <li>Could you further explain why affirmative action is a good thing for minorities?</li>
                <li>Another example</li>
              </ul>
            </div>
            <div className="section">
            <h2>Learn More</h2>
            Here are some articles that you could read through that could further educate on the types of problematic topics your phrases mentioned.
            </div>
            <div className="section">
            <h2>Have Another Phrase?</h2>
            <button className="primary btn-small">New Phrase</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Results
