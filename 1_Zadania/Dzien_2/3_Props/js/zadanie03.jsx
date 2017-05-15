import React from 'react';
import ReactDOM from 'react-dom';

class LikeBox extends React.Component {
  render() {
    return <div>
    <span>{this.props.likes}</span>
    <button>Like it!</button>
    </div>;
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <LikeBox likes={10}/>,
        document.getElementById('app')
    );
});
