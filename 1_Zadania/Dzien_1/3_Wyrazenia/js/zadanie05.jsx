import React from 'react';
import ReactDOM from 'react-dom';
import animals from './zadanie05';
document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
    <div>Liczba zwierząt {animals.length} , {animals.join(" ")}</div>,
    document.getElementById('app')
    );
});
