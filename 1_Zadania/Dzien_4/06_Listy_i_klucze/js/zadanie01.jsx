import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie01.js'
document.addEventListener('DOMContentLoaded', function(){
console.log(people);
class PeopleList2 extends React.Component {
  render() {
    return <ul>
              {this.props.name}
          </ul>
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        array: people
    }
  }
  handleButtonClick= () => {
    this.setState({
      array: this.state.array.reverse()
    })
  }
  render() {
    const list = this.state.array.map(person => <PeopleList2
                key={person.email}
                name={person.name}/>
              )
    return  <div>
              <ul>
                {list}
              </ul>
              <button id="button" onClick={this.handleButtonClick}>Odwróć</button>
            </div>
  }
}
  ReactDOM.render(
      <App/>,
      document.getElementById('app')
  );
});
