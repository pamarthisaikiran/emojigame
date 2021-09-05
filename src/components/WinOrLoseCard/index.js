// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayGame, score} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const GameStatus = isWon ? 'You Won' : 'You Lose'
  const ScoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="bg1">
      <div>
        <h1 className="heading">{GameStatus}</h1>
        <p className="para">{ScoreLabel} </p>
        <p className="score1">{score}/12</p>

        <button type="button" className="button" onClick={onClickPlayGame}>
          Play Again
        </button>
      </div>
      <img alt="img" className="img1" src={imgUrl} />
    </div>
  )
}

export default WinOrLoseCard
