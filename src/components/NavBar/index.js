// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScore = () => {
    const {currentScore, isGameOver, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              alt="Emoji Logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            />
            <h1>Emoji Game</h1>
          </div>
          {this.renderScore()}
        </div>
      </nav>
    )
  }
}

export default NavBar
