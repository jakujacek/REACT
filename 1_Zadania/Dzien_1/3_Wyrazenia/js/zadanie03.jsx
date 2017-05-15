import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const info1 = prompt('Wpisz dowolną liczbę');
    const info2 = prompt('Wpisz drugą  dowolną liczbę');
    const info3 = prompt ('wpisz jeden ze znaków: "+","-","/", "*"');

    const numberOne = parseInt(info1);
    const numberTwo = parseInt(info2);
    let result;
    if (info3 == "+"){
    result = <h1>{numberOne + numberTwo}</h1>;
    } else if (info3 == "-") {
    result = <h2>{numberOne - numberTwo}</h2>;
    } else if (info3 == "*") {
    result = <h3>{numberOne * numberTwo}</h3>;
    } else if (info3 == "/") {
    result = <h4>{numberOne / numberTwo}</h4>;
    }

    ReactDOM.render(
    result,
    document.getElementById('app')
    );
});
