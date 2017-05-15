import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class HelloName extends React.Component {
    constructor() {
      super()
      this.state = {
        text: "Jacek Jakubiak"
      }
    }
    handleNameChange = (e)=> {
      this.setState({
        text: e.target.value
      })
      console.log(e.target.value);
    }
    render() {
      return <div>
            <input type="text" value={this.state.text}
              onChange={this.handleNameChange}/>
            <h1></h1>
            </div>
    }
  }

  class App extends React.Component {
    render() {
      return <HelloName/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
