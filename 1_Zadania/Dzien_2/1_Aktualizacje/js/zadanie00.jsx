import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let timeDetonator = parseInt(prompt('Podaj ilość sekund'));

    function renderDiv() {
        if (timeDetonator > 0) {
            ReactDOM.render(
                <div>
                    { timeDetonator }
                </div>,
                document.getElementById('app')
            );
        } else {
            clearInterval(interVal);
            ReactDOM.render(
                <div>
                    Zakończono
                </div>,
                document.getElementById('app')
            );
        }

    }

    let interVal = setInterval(() => {
        timeDetonator -= 1;//timeDetonator = timeDetonator - 1
        renderDiv();
    }, 1000);
		renderDiv();

  });
