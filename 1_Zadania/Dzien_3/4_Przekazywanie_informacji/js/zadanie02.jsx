import React from 'react';
import ReactDOM from 'react-dom';

class StrobeLight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                width: "500px",
                height: "50px",
                backgroundColor: "white"
            }
        }
    }

    componentDidMount() {
        let mix = "white";
        if (this.props.onOff) {
            this.intervalId = setInterval(() => {
                switch(mix) {
                    case "white":
                        mix = this.props.color;
                        break;
                    case this.props.color:
                        mix = "white";
                        break;
                }
                this.setState({
                    style: {
                        width: "500px",
                        height: "50px",
                        backgroundColor: mix
                    }
                })
            }, this.props.frequency)
        }

    }

    componentWillReceiveProps() {
            clearInterval(this.intervalId);
    }

    render() {
        return <div style={this.state.style}></div>
    }
}

class StrobeControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            on: true
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                on: false
            })
        }, 5000)
    }

    render () {
        return <div>
            <StrobeLight color="red" frequency={5}
                         onOff={this.state.on}/>
            <StrobeLight color="red" frequency={50}
                         onOff={false}/>
            <StrobeLight color="red" frequency={500}
                         onOff={this.state.on}/>
            <StrobeLight color="red" frequency={5000}
                         onOff={false}/>
            <StrobeLight color="red" frequency={500}
                         onOff={this.state.on}/>

        </div>
    }
}

class App extends React.Component {
    render () {
        return <StrobeControl />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
