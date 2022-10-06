// Write your code here

import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl, category} = eachApp
  return (
    <div>
      <li className="app-item-container">
        <img className="pic" src={imageUrl} alt={appName} value={category} />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
