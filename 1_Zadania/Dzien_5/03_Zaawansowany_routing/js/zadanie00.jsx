import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function(){

  class Template extends React.Component{
    render() {
      return <div>
      <h1>App</h1>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/hello/Pawel">Hello</Link>
      </li>
      <li>
      <Link to="/checkage/18">CheckAge</Link>
      </li>
      </ul>
      {this.props.children}
      </div>;
    }
  }

  class Main extends extends React.Component {
    render() {
      return <h1>Witaj na stronie!</h1>
    }
  }

  class HelloYou extends React.Component {
    render() {
      return <h1></h1>
    }
  }

  class CheckAge extends React.Component {
    render() {
      return
    }
  }
    ReactDOM.render(
        <Router history={hashHistory}>
        <Route path="/" component={Template}/>
        <IndexRoute path="/" component={Main}/>
        <Route path="/hello/:name" component={HelloYou}/>
        <Route path="/checkage/:age" component={}
        document.getElementById('app')
    );
});
