import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class StrobeLight extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        style: {
          width: "500px",
          height: "50px",
          backgroundColor: "white",
          border: "1px solid black"
        }
      }
    }
    componentDidMount() {
      let mix = "white";
      setInterval(()=> {
          switch(mix) {
            case "white":
                  mix = this.props.color;
                  break;
            case this.props.color:
                  mix = "white";
                  break;
          }
          this.setState({
            style: {
              width: "500px",
              height: "50px",
              backgroundColor: mix,
              border: "1px solid black"
            }
          })
      }, this.props.frequency)
    }
    render() {
      return <div style={this.state.style}></div>
    }
  }

  class App extends React.Component {
    render() {
      return <StrobeLight frequency="5" color="red"/>
    }
  }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
