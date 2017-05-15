import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class MoreClicks extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        text: "Klik!",
        style: {
          width: "auto"
        }
      }
    }
    firstClicked() {
      console.log("Pierwszy przycisk kliknięty");
    }
    secondClicked = () => {
      this.setState({
        text: "Click!"
      })
    }
    thirdClicked = () => {
        this.setState({
          style: {
            width: "300px"
          }
        })
    }
    render() {
      return <div>
          <button id="first" onClick={this.firstClicked}>{this.state.text}</button>
          <button id="second" onClick={this.secondClicked}>{this.state.text}</button>
          <button id="third" onClick={this.thirdClicked} style={this.state.style}>
          {this.state.text}</button>
      </div>
    }
  }

  class App extends React.Component {
    render() {
      return <MoreClicks />
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
