import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory } from 'react-router';

class Template extends React.Component{
  render() {
    return <div>
    <h1>App</h1>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/about/us">About Us</Link>
    </li>
    <li>
    <Link to="/about/company">About Company</Link>
    </li>
    </ul>
    {this.props.children}
    </div>;
  }
}

class Main extends React.Component {
    render() {
        return <h1>Witaj na stronie!</h1>;
    }
}

class AboutUs extends React.Component {
  render() {
    return <p>Trochę więcej o nas...</p>;
  }
}

class AboutCompany extends React.Component {
    render() {
        return <p>Trochę więcej o naszej firmie!</p>;
    }
}


class App extends React.Component { heheszki
  render() {
    return <Router history={hashHistory}>
    <Route path='/' component={Template}>
    <IndexRoute component={Main}/>
    <Route path='/about/us' component={AboutUs}/>
    <Route path='/about/company' component={AboutCompany} />
    </Route>
    </Router>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
