import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './style.css';
let value = '';
let average = 0;

class Results extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

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
              <div id="bar" className="eighth"></div>
            </div>
            <h3>Homophobic</h3>
            <div className="meter">
              <div id="bar" className="seventh"></div>
            </div>
            <h3>Sexist</h3>
            <div className="meter">
              <div id="bar" className="ninth"></div>
            </div>
            <h3>Regligious</h3>
            <div className="meter">
              <div id="bar" className="second"></div>
            </div>
          </div>
          <div className="container--right column">
            <div className="section">
              <h1 className="section-header">Phrase Breakdown</h1>
              <h2 className="prompt">{this.props.prompt}</h2>
            </div>
            <div className="section">
            <h1 className="section-header">Learn More</h1>
            <p>Here are some articles that you could read through that could further educate on the types of problematic topics your phrases mentioned.</p>
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
