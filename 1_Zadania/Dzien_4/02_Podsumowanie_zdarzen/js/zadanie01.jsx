import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Bulb extends React.Component {
    constructor() {
      super();
      this.state = {
        style: {
          backgroundColor: "white",
          width: "100px",
          height: "100px"
        },
        text: "on"
      }
    }

    handleSwitcher = () => {
        switch(this.state.text) {
          case "on":
          this.setState({
            text: "off",
            style: {
              backgroundColor: "yellow",
              width: "100px",
              height: "100px"
            }
          })
          break;
          default:
          this.setState({
            text: "on",
            style: {
              backgroundColor: "white",
              width: "100px",
              height: "100px"
            }
          })
          break;
        }
    }
    render() {
      return <div style={this.state.style}>
          <button onClick={this.handleSwitcher}>{this.state.text}</button>
      </div>
    }
  }
    ReactDOM.render(
        <Bulb/>,
        document.getElementById('app')
    );
});
