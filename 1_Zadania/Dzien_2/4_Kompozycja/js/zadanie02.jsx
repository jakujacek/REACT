import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){


class ChatHeader extends React.Component {
  render() {
    return <header>
        <h1>Chat prywatny</h1>
    </header>
  }
}
class ChatMessage extends React.Component {
  render() {
    return <li>{this.props.message}</li>;
  }
}
class ChatMessages extends React.Component {
  render() {
    return <div>
        <ul>
            <ChatMessage message="Wpis z chatu 1"/>
            <ChatMessage message="Wpis z chatu 1"/>
            <ChatMessage message="Wpis z chatu 1"/>
        </ul>
    </div>;
  }
}
class NewChatMessage extends React.Component {
  render() {
    return <footer>
        <input type="text"/>
        <button>Wyślij</button>
    </footer>
  }
}

class Chat extends React.Component {
  render() {
    return <div className="chat">
    <ChatHeader/>
    <ChatMessages/>
    <NewChatMessage/>
    </div>
  }
}
   class App extends React.Component{
     render(){
        return <div>
            <Chat />
       </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
