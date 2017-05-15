import React from 'react';
import ReactDOM from 'react-dom';
import people from "./zadanie00.js"
document.addEventListener('DOMContentLoaded', function(){
console.log(people);
  class PeopleList extends React.Component {
    render() {
      return <ul>
                {this.props.name}
            </ul>
    }
  }

  class App extends React.Component {
    render() {
      return <ul>
                {
                  people.map(person => <PeopleList
                              key={person.pesel}
                              name={person.name}/>
                  )
              }
              </ul>
    }
  }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
