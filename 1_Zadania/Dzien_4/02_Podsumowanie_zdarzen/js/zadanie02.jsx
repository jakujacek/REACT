import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Dives extends React.Component {
    constructor() {
      super();
      this.state = {
        style: {
          backgroundColor: "green",
          width: "500px",
          height: "200px"
        }
      }
    }
    changeStyle = () => {
      this.setState({
        style: {
          backgroundColor: "blue",
          width: "500px",
          height: "400px"
        }
      })
    }
    changeStyleTwo = () => {
      this.setState({
        style: {
          backgroundColor: "green",
          width: "500px",
          height: "200px"
        }
      })
    }
    render() {
      return <div style={this.state.style} onMouseEnter={this.changeStyle}
      onMouseLeave={this.changeStyleTwo}></div>
    }
  }

  class App extends React.Component {
    render() {
      return <Dives/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
