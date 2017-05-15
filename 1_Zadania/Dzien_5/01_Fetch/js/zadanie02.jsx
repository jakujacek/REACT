import React from 'react';
import ReactDOM from 'react-dom';

class CarsDBManager extends React.Component {
  constructor() {
    super()
    this.state = {
      apiUrl: 'http://localhost:3000/cars/',
      cars: []
    }
  }
  componentDidMount() {
    fetch(this.state.apiUrl)
    .then(response => response.json())
    .then( responseJson => {
      this.setState({
        cars: responseJson
      })
    })
  }
  handleButtonClick = (event) => {
    fetch(this.state.apiUrl + event.target.dataset.id, {
      method: 'DELETE'
    })
    .then(() => {
      fetch(this.state.apiUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          cars: responseJson
        })
      })
    })
  }
  render() {
    return <div>
            <ul>
               {
                 this.state.cars.map(element => {
                   return <li key={element.id}>
                        Brand: {element.brand}<br/>
                        Name: {element.name}<br/>
                        <button data-id={element.id} onClick={this.handleButtonClick}>Sprzedano</button>
                   </li>
                 })
               }
            </ul>
          </div>
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <CarsDBManager />,
        document.getElementById('app')
    );
});
