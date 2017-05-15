import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class CheckEvent extends React.Component {
    constructor() {
      super();
      this.style = {
        width: "100px",
        height: "100px",
        border: "1px solid black"
      }
    }
    onClick() {
      console.log("nacisnąłeś");
    }
    mouseEnter() {
      console.log("najechałeś");
    }
    mouseLeave() {
      console.log("zjechałeś");
    }
    render() {
      return <div style={this.style} onClick={this.onClick} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              Wielki DIV
            </div>
    }
  }
    ReactDOM.render(
        <CheckEvent/>,
        document.getElementById('app')
    );
});
