import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let age = parseInt(prompt('Podaj swój wiek'));
    let result;
    if (age < 18) {
      result = <div id="youth"></div>;
    } else {
      result = <div id="adult"></div>;
    }

    ReactDOM.render(
      result,
        document.getElementById('app')
    );
});
