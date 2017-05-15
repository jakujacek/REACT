import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class MobileMenu extends React.Component {
    constructor() {
      super()
      this.state = {
        style: {
          display: "none"
        }
      }
    }

    handleHamburgerClick = () => {
      this.setState({
        style: {
          display: "block"
        }
      })
    }
    handleButtonClick = () => {
      this.setState({
        style: {
          display: "none"
        }
      })
    }
    render() {
      return <menu>
          <div id="hamburger" onClick={this.handleHamburgerClick}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu"/>
          </div>
          <div id="list" style={this.state.style}>
              <ul>
                  <li>Menu 1...</li>
                  <li>Menu 2...</li>
                  <li>Menu 3...</li>
                  <li>Menu 4...</li>
              </ul>
              <div id="button" onClick={this.handleButtonClick}>Schowaj menu</div>
          </div>
      </menu>
    }
  }

  class App extends React.Component {
    render() {
      return <MobileMenu />
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
