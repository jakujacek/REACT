import React from 'react';
import ReactDOM from 'react-dom';
import Person from "./zadanie01.js";
document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>
            <h1>{Person.title + Person.name + Person.surname}</h1>
            <span>{Person.age}</span>
        </div>,
        document.getElementById('app')
    );
});
