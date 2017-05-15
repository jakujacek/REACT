import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class TextField extends React.Component {
    constructor() {
      super()
      this.state = {
        len: 0
      }
    }
    handleTextAreaChange = (event) => {
      this.setState({
        len: event.target.value.length
      })
    }
    render() {
      return <div>
              <textarea maxLength="100" onChange={this.handleTextAreaChange}/>
              <span>{this.state.len}</span>
            </div>
    }
  }

  class App extends React.Component {
    render() {
      return <TextField />
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
