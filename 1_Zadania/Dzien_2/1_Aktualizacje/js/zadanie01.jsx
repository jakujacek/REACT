import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  let time = (new Date()).toLocaleTimeString();

  function changeTime(){
    ReactDOM.render(
        <div>
            <span>Jest godzina:</span>
            <h1>{time}</h1>
        </div>,
        document.getElementById('app')
    );
}
let timer = setInterval(()=>{
time = (new Date()).toLocaleTimeString();
changeTime();
}, 1000);
changeTime();
});
