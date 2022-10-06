// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, updateTabItem, isActive} = props
  const {tabId, displayText} = eachTab

  const OnClickUpdateTabItem = () => {
    updateTabItem(tabId)
  }

  const activeClassName = isActive ? 'highlight' : ''

  return (
    <li className="lists-items">
      <button
        type="button"
        className={`button ${activeClassName}`}
        onClick={OnClickUpdateTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
