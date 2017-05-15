import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class Invites extends React.Component {
    render() {
      return <li>{this.props.name}</li>
    }
  }

  class App extends React.Component {
    constructor() {
      super()
      this.state = {
          people: []
      }
    }
    handleButtonClick = () => {
      let nameInfo = prompt("Proszę podać imię i nazwisko")
      let test = this.state.people.slice()
      test.push(nameInfo);
      this.setState({
        people: test
      })
    }
    render() {
        return <ul>
              {this.state.people.map((person, index) => <Invites
                  key={index}
                  name={person}/>
                )}
          <button id="inviter" onClick={this.handleButtonClick}>Nowy</button>
        </ul>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
