import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class SpeedClickGame extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        time: this.props.time,
        points: 0,
        disabled: false
      }
    }
    componentDidMount() {
      this.intervalId = setInterval(()=> {
        if(this.state.time !== 0) {
            this.setState({
              time: this.state.time -50
            })
        } else {
          this.setState({
            disabled: true
          })
          clearInterval(this.intervalId)
        }
      }, 50)
    }

    handleButtonClick = () => {
      this.setState({
        points: this.state.points + 1,
        time: this.state.time - 50
      })
    }

    render() {
      return <div>
          <button id="button" disabled={this.state.disabled} onClick={this.handleButtonClick}>Click me!</button>
        <h1>{this.state.time}</h1>
        <h2>{this.state.points}</h2>
      </div>
    }
  }

  class App extends React.Component {
    render() {
      return <SpeedClickGame time={5000}/>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
