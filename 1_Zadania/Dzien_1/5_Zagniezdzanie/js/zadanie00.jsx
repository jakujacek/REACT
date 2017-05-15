import React from 'react';
import ReactDOM from 'react-dom';
import People from './zadanie00_02';
document.addEventListener('DOMContentLoaded', function(){
  const people = People.map((element) => {
    return <div>{element.name}&nbsp;
          {element.surname}
        </div>
  });
    ReactDOM.render(
        <div>
        {people}
        </div>,
        document.getElementById('app')
    );
});
