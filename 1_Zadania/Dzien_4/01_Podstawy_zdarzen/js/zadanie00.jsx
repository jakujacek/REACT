import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  class Click extends React.Component {
    itWorks() {
       console.log("Działa");
    }
    render() {

      return <button onClick={this.itWorks}>Przycisk</button>
    }
  }
    ReactDOM.render(
        <Click/>,
        document.getElementById('app')
    );
});
