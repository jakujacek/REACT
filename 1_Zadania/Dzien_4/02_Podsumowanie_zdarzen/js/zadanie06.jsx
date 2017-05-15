import React from 'react';
import ReactDOM from 'react-dom';

class MathQuestionGame extends React.Component {
    constructor() {
        super()
        this.state = {
            operations: ["+", "-", "*"],
            oop: "",
            a: 0,
            b: 0,
            time: 10,
            disabled: false
        }
    }

    shuffle = array => {
        for (let i = array.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [array[i - 1], array[j]] = [array[j], array[i - 1]];
        }

        return array
    }

    randomNumber = () => {
        return Math.floor(Math.random() * (10 - 1) + 1 )
    }

    rslt = () => {
        let finalResult;
         switch(this.state.oop) {
             case "+":
                 finalResult = this.state.a + this.state.b
                 break;
             case "-":
                 finalResult = this.state.a - this.state.b
                 break;
             case "*":
                 finalResult = this.state.a * this.state.b
                 break;
         }
         return finalResult;
    }

    randomResult() {
        return Math.floor(Math.random() * (100 - 1) + 1 )
    }

    handleButtonClick = (event) => {
        console.log(event.target.innerHTML);
        if (parseInt(event.target.innerHTML) === parseInt(this.rslt())) {
            document.querySelector('h1').innerHTML = "Poprawna odpowiedź"
        } else {
            document.querySelector('h1').innerHTML = "Błędna odpowiedź"
        }
        clearInterval(this.intervalId)
    }

    generateButtons = () => {
        let btns = [];
        for (let i=0; i<4; i++) {
            if (i==3) {
                btns[i] = <button disabled={this.state.disabled} onClick={this.handleButtonClick}>{this.rslt()}</button>
            } else {
                btns[i] = <button disabled={this.state.disabled} onClick={this.handleButtonClick}>{this.randomResult()}</button>
            }
        }

        return btns
    }

    componentWillMount() {
        this.setState({
            oop: this.state.operations[Math.floor(Math.random()*3)],
            a: this.randomNumber(),
            b: this.randomNumber()
        })
    }

    componentDidMount() {
        this.shuffled = this.shuffle(this.generateButtons());
        this.intervalId = setInterval(() => {
            if (this.state.time !== 0) {
                this.setState({
                    time: this.state.time - 1
                })
            } else {
                document.querySelector('h1').innerHTML = 'Czas minął'
                this.setState({
                    disabled: true
                });
                clearInterval(this.intervalId)
            }

        }, 1000)
    }

    render() {
        return <div>
            <h1>{this.state.a}
                {this.state.oop}
                {this.state.b} =
            </h1>
            <div>
                {this.shuffled}
            </div>
            <h2>00:{this.state.time}</h2>
        </div>

    }

}

class App extends React.Component {
    render() {
        return <MathQuestionGame />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
