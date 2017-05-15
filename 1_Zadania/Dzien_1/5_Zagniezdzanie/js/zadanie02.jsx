import React from 'react';
import ReactDOM from 'react-dom';
import People from "./zadanie00_02.js";
document.addEventListener('DOMContentLoaded', function(){
  const people = People.map((element) => {
    return <div className="person">
        <img src={element.avatar}/>
            <div className="info">
              <h1>{element.title + " " + element.name + " " + element.surname}</h1>
              <p>{element.bio}</p>
            </div>
        </div>
  });
    ReactDOM.render(
      <div>
        {people}
      </div>,
        document.getElementById('app')
    );
});
