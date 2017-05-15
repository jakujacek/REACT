import React from 'react';
import ReactDOM from 'react-dom';
const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
const style = {
  width: "100px",
  height: "100px",
  border: "5px solid"
};
document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <img src={imageUrl}/>,
        document.getElementById('app')
    );

    const color = prompt('Wypisz jaki ma być kolor ramki');
    let result;
    let colors = ['red', 'green', 'blue'];
    if (colors.indexOf(color) !== -1) {
      style['borderColor'] = color;
      result = <div style={style}><img src={imageUrl}/></div>;
    } else {
      result = <div>Nieprawidłowy kolor</div>;
    }

    ReactDOM.render(
      result,
      document.getElementById('app')
    );
});
