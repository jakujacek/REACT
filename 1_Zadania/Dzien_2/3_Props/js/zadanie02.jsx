import React from 'react';
import ReactDOM from 'react-dom';

class Sum extends React.Component {
  render() {
    return <h1>{this.props.numbers.reduce((p, n)=> {
      return p + n;
    })}</h1>;
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Sum numbers={[1,2,5,4,7]}/>,
        document.getElementById('app')
    );
});
