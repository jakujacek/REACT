import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class Browser extends React.Component {
    render(){
      return <div>
          <input type="text" placeholder="szukaj"></input>
          <button>Wyszukaj</button>
      </div>;
    };
  }
  function browser() {
    return <div>
    <input></input>
    <button></button>
    </div>;
  };
    ReactDOM.render(
        <Browser/>,
        document.getElementById('app')
    );
});
