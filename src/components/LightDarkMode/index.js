// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {current: true}

  onclickedbutton = () => {
    const {current} = this.state
    if (current === true) {
      this.setState({current: false})
      return {current}
    }
    this.setState({current: true})
    return {current}
  }

  render() {
    const {current} = this.state
    let container1
    let mainheading1
    let text
    let button1
    if (current === true) {
      container1 = 'dark_cont'
      mainheading1 = 'dark_head'
      text = 'Light Mode'
      button1 = 'drk_btn'
    } else {
      container1 = 'light_cont'
      mainheading1 = 'light_head'
      text = 'Dark Mode'
      button1 = 'light_btn'
    }
    return (
      <div className="main_container">
        <div className={`bg_container ${container1}`}>
          <h1 className={`main_heading ${mainheading1}`}>
            Click To Change Mode
          </h1>
          <div>
            <button
              onClick={this.onclickedbutton}
              className={`button_ ${button1}`}
              type="button"
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
