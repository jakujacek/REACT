import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class Button extends React.Component {
    render() {
      return <button>{this.props.text}</button>
    }
  }

  class Message extends React.Component {
    render() {
      return <div>
      <p>{this.props.messageText}</p>
      <Button text="Tak"/>
      <Button text="Nie"/>
        </div>
    }
  }
  class App extends React.Component {
    render() {
      return <div>
      <Message messageText="Zaloguj"/>
      <Message messageText="Zarejestruj"/>
      </div>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
