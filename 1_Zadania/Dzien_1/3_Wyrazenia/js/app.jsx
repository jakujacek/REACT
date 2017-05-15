import Zadanie from './zadanie00.jsx'
import Zadanie1 from './zadanie01.jsx'
import Zadanie2 from './zadanie02.jsx'
import Zadanie3 from './zadanie03.jsx'
import Zadanie4 from './zadanie04.jsx'
import Zadanie5 from './zadanie05.jsx'
import Zadanie6 from './zadanie06.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

ducument.addEventListener('DOMConstentLoaded', function(){
  ReactDOM.render(
  <div>
    <Zadanie/>
    <Zadanie1/>
    <Zadanie2/>
    <Zadanie3/>
    <Zadanie4/>
    <Zadanie5/>
    <Zadanie6/>
  </div>,
  document.getElementById('app')
  );
});
