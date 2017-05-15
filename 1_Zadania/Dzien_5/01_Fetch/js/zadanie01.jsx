import React from 'react';
import ReactDOM from 'react-dom';

class BookInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      apiUrl:'https://www.googleapis.com/books/v1/volumes?q=isbn:',
      title: ""
    }
  }
  componentDidMount() {
    fetch(this.state.apiUrl + this.props.isbn)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.totalItems > 0)
      this.setState({
        title: responseJson.items[0].volumeInfo.title
          })
      })
      .catch(err => {
        throw new Error(err)
    })
  }
  render() {
    if(this.state.title === "") {
      return <div>
                Nie ma takiej książki
            </div>
    }
    return <div>
              <h1>{this.state.title}</h1>
            </div>
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <BookInfo isbn="0747532699"/>,
        document.getElementById('app')
    );
});
