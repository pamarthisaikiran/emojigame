import {Component} from 'react'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmoji: [],
    isGameOver: false,
    topScore: 0,
  }

  setTopScore = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
  }

  finishGameSetTopScore = newScore => {
    this.setIsGameover(true)
    this.setTopScore(newScore)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmoji} = this.state
    const isEmojiPresent = clickedEmoji.includes(id)
    const clickedEmojiLength = clickedEmoji.length

    if (isEmojiPresent) {
      this.finishGameSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="ul">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            onClickEmoji={this.onClickEmoji}
            eachEmoji={eachEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  setIsGameover = value => {
    this.setState({isGameOver: value})
  }

  resetGame = () => {
    this.setIsGameover(false)
    this.setState({clickedEmoji: []})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props

    const {clickedEmoji} = this.state

    const isWon = clickedEmoji.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayGame={this.resetGame}
        score={clickedEmoji.length}
      />
    )
  }

  render() {
    const {clickedEmoji, isGameOver, topScore} = this.state

    return (
      <div>
        <NavBar
          currentScore={clickedEmoji.length}
          isGameOver={isGameOver}
          topScore={topScore}
        />
        <div className="bg">
          {isGameOver ? this.renderScoreCard() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
