import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class HelloWorld extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          text:   "Hello, World"
        };
      }
      componentWillMount(){
        console.log("component will mount");
      }
      componentDidMount() {
        console.log("component did mount");
        this.timeoutId = setTimeout(()=> {
          this.setState({
            text: "Hi, Everyone!"
          })
        }, 5000);
      }
      componentWillUnmount() {
        clearTimeout(this.timeoutId);

      }
      componentWillUpdate(){
        console.log("component will update");
      }
      componentDidUpdate(){
        console.log("component did update");
      }
      render() {
        this.componentWillUnmount();
        return <h1>{this.state.text}</h1>;
      }
      comp
    }

    ReactDOM.render(
        <HelloWorld/>,
        document.getElementById('app')
    );
});
