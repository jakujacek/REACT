import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class LifeCyclesTester extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount(){
      console.log('Komponent będzie zamontowany');

    }
    componentDidMount(){
      console.log("Komponent został zamontowany");
    }
    componentWillReceiveProps(newProps){
      console.log("Komponent dostanie propsy");
    }
    shouldComponentUpdate(newProps, newState) {
      console.log("Czy komponent się zaktualizuje?");
      return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Komponent zostanie zaktualizowany");
    }
    componentDidUpdate() {
      console.log("Komponent został zaktualizowany");
    }
    componentWillUnmount() {
      console.log("Komponent zostanie zdemontowany");
    }
    render() {
      return (
        <div>
          <h1>{this.props.text}</h1>
        </div>
      )
    }
  }


    ReactDOM.render(
        <LifeCyclesTester text="Test1"/>,
        document.getElementById('app')
    );

    let timeOut = setTimeout(()=>{
      ReactDOM.render(
        <LifeCyclesTester text="Test2"/>,
        document.getElementById('app')
      )
    }, 5000);
});
