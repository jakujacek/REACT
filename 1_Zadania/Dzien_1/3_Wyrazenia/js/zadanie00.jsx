import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const info1 = prompt('Wpisz dowolną liczbę');
    const info2 = prompt('Wpisz drugą  dowolną liczbę');

    const numberOne = parseInt(info1);
    const numberTwo = parseInt(info2);
    const result = <div>{numberOne + numberTwo}</div>;
    ReactDOM.render(
        result,
        document.getElementById('app')
    );
});
