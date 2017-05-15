import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class Promotion extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        seconds: this.props.seconds
      };
    }
    componentDidMount() {
      this.intervalId = setInterval(()=> {
        this.setState({
          seconds: this.state.seconds -1
        });
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
      render() {
        console.log(this.state.seconds);
          if(this.state.seconds > 0) {
          return <h1>Do końca promocji {this.state.seconds} sekund</h1>
        } else {
          this.componentWillUnmount();
          return <h1>Koniec promocji</h1>
        }
      }
  }
    ReactDOM.render(
        <Promotion seconds={5}/>,
        document.getElementById('app')
    );
});
