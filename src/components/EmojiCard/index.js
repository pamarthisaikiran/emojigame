// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const clickEmojis = () => {
    onClickEmoji(id)
  }

  return (
    <li className="li" onClick={clickEmojis}>
      <img alt={emojiName} src={emojiUrl} />
    </li>
  )
}

export default EmojiCard
