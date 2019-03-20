import React, { Component } from 'react'
import List from './components/List'

class App extends Component {
  state = {
    todoItems: null
    }
  }

  addItem = () => {
    this.setState({
      todoItems: ['OH YEAH']
    })
  }

  render() {
    return (
      <div className="App">
        <button className='submit-button' onClick={this.addItem}>Submit</button>
        <List />
      </div>
    )
  }
}

export default App
