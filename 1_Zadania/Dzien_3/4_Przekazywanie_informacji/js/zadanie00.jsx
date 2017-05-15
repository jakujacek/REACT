import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
class ClockDate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>
        {this.props.date}
    </h1>
  }
}

class ClockTime extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>
        {this.props.time}
    </h1>
  }
}
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      }
    }
    componentDidMount() {
      setInterval(()=> {
        this.setState({
          date: new Date()
        })
      }, 1000);
    }
    render() {
      return <div>
            <ClockDate date={this.state.date.toLocaleDateString()}/>
            <ClockTime time={this.state.date.toLocaleTimeString()}/>
      </div>
    }
  }

class App extends React.Component {
  render() {
    return <Clock />
  }
}
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
