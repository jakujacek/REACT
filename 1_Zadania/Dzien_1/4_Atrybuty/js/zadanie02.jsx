import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej
    let a = genNumber();
    let b = genNumber();
    const info = prompt(`Jaki jest wynik dodawani ${a} i ${b}`);
    let result;
    if (info == a + b) {
      result = <div style={{backgroundColor: "green"}}>Odpowiedź poprawna</div>;
    } else {
      result = <div style={{backgroundColor: "red"}}>Odpowiedz błędna</div>;
    }
    ReactDOM.render(
        result,
        document.getElementById('app')
    );
});
