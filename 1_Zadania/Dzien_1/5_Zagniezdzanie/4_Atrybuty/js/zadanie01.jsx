import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej
    const height = "100px";
    const redStyle = {
      height: `${height}`,
      backgroundColor: "red"
    }
    const greenStyle = {
      height: `${height}`,
      backgroundColor: "green"
    }
    const blueStyle = {
      height: `${height}`,
      backgroundColor: "blue"
    }

    const redDiv = <div style={redStyle}></div>;
    const greenDiv = <div style={greenStyle}></div>;
    const blueDiv = <div style={blueStyle}></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});
