import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class TextTyper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: this.props.text[0],
        reversed: this.props.reversed
      };
    }
    componentDidMount() {
  if (this.props.reversed) {
    this.setState({
      text: this.props.text
    });
    let index = this.props.text.length

    this.intervalId = setInterval(()=>{
      if(index=>0) {
        this.setState({
          text: this.state.text.slice(0, -1)
          //albo substr(0, index)
        });
        index--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000)
  } else {
  let index = 1;
  this.intervalId = setInterval(() => {
    if (index< this.props.text.length) {
      this.setState({
        text: this.state.text + this.props.text[index]
      });
      index++;
    } else {
      clearInterval(this.intervalId);
    }
  }, 1000);
}
}

  render() {
    return <h1>{this.state.text}</h1>
  }
}


  class App extends React.Component {
    render() {
      return <div>
      <TextTyper text="Witaj!" reversed={true}/>
      </div>
    }
  }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
