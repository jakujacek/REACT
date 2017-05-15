import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class CrazyDiv extends React.Component {
    constructor() {
      super()
      this.state = {
        style: {
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: Math.floor(Math.random() * 1000 +1) + "px",
          top: Math.floor(Math.random() * 1000 +1) + "px"
        }
      }
    }

    handleMouseEnter = () => {
        this.setState({
          style: {
            backgroundColor: "red",
            width: "100px",
            height: "100px",
            position: "absolute",
            left: Math.floor(Math.random() * 600 +1) + "px",
            top: Math.floor(Math.random() * 600 +1) + "px"
          }
        })
    }

    render() {
      return <div style={this.state.style}
              onMouseEnter={this.handleMouseEnter}>
      </div>
    }
  }

  class App extends React.Component {
    render() {
      return <CrazyDiv />
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
