import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class ClockDateDay extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
          {this.props.day}
      </div>
    }
  }

  class ClockDateMonth extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
          {this.props.month}
      </div>
    }
  }

  class ClockDateYear extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
          {this.props.year}
      </div>
    }
  }
  class ClockDate extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h1>
          <ClockDateDay day={this.props.date.getDate()}/>
          <ClockDateMonth month={this.props.date.getMonth() +1}/>
          <ClockDateYear year={this.props.date.getFullYear()}/>
      </h1>
    }
  }


  class ClockTimeHour extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
          {this.props.hour}
      </div>
    }
  }

  class ClockTimeMinute extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
          {this.props.minute}
      </div>
    }
  }

  class ClockTimeSecond extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>
          {this.props.seconds}
      </div>
    }
  }
  class ClockTime extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h1>
          <ClockTimeHour hour={this.props.time.getHours()}/>
          <ClockTimeMinute minute={this.props.time.getMinutes()}/>
          <ClockTimeSecond seconds={this.props.time.getSeconds()}/>
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
              <ClockDate date={this.state.date}/>
              <ClockTime time={this.state.date}/>
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
