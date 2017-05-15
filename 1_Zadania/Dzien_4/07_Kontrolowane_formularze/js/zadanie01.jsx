import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class AddTwoNumbers extends React.Component {
    constructor() {
      super()
      this.state = {
        a: 0,
        b: 0
      }
    }
    handleNumChange = (e) => {
      this.setState({
        a: parseInt(e.target.value),
      })
    }

    handleInputBChange = (e) => {
      this.setState({
        b: parseInt(e.target.value),
      })
    }
    render() {
      return <div>
              <input type="text" value={this.state.a}
                onChange={this.handleNumChange}/>
              <input type="text" value={this.state.b}
              onChange={this.handleInputBChange}/>
              <h1>{this.state.a + this.state.b}</h1>
            </div>
    }
  }

  class App extends React.Component {
    render() {
      return <AddTwoNumbers/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
