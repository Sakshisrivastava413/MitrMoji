import React, { Component } from 'react';
import languages from '../assets/language'; 
import click from '../assets/click.wav';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      language: {}
    };
  }
  componentDidMount() {
    this.setState({ user: JSON.parse(localStorage.getItem('user') || {}) });
    const langKey = localStorage.getItem('lang') || 'english';
    console.log(this.props)
    this.setState({ language: languages[langKey] });
  }
  backToHome = () => {
    let a = new Audio(click);
    a.play();
    this.props.history.push('/home');
  }

  render() {
    const { hasWon, language } = this.state;
    return (
      <div className="main">
      <p>hellolololo</p>
				<div style={{ textAlign: 'center' }}>
				</div>
        <h2 className="username">{hasWon ? language.WON : language.LOSE}</h2>
				<button className="button" onClick={this.backToHome}>
          {language.BACK_TO_HOME}
				</button>
        <button className="log-out" onClick={this.logOut}>
					{language.LOGOUT}
				</button>
      </div>
    );
  }
}

export default Result;
