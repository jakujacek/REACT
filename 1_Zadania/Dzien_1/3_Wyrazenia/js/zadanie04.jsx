import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  function calc(a, b, operation) {
        let result;
        if (operation == "+"){
        result = <h1>{a + b}</h1>;
        } else if (operation == "-") {
        result = <h2>{a - b}</h2>;
        } else if (operation == "*") {
        result = <h3>{a * b}</h3>;
        } else if (operation == "/") {
        result = <h4>{a / b}</h4>;
      } else {
        result = "Błędne działanie";
      }
      return result;
    };
    let num1 = parseInt(prompt('Wpisz dowolną liczbę'));
    let num2 = parseInt(prompt('Wpisz drugą  dowolną liczbę'));
    let op1 = prompt ('wpisz jeden ze znaków: "+","-","/", "*"');
    ReactDOM.render(
      <div>
        {calc(num1, num2, op1)}
      </div>,
    document.getElementById('app')
    );
});
