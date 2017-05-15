import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <h1>Hello, World!</h1>,
        document.getElementById('app')
    );
    let ageDate = prompt('Podaj rok swojego urodzenia');
    let ageNumber = parseInt(ageDate);
    let thisYear = (new Date()).getFullYear();
    ReactDOM.render(
    <h1>Masz {thisYear - ageNumber} lata</h1>,
    document.getElementById('app')
    );
});
