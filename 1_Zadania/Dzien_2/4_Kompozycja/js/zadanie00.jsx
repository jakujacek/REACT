import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {
        title   :   'Mysz komputerowa',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/a/aa/3-Tastenmaus_Microsoft.jpg'
    },
    {
        title   :   'Klawiatura',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptop programisty',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
];


class ShopItemHeader extends React.Component {
  render(){
    return <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.image}/>
    </div>
  }
}

class ShopItemDescription extends React.Component {
  render() {
    return <article>
        <p>this.props.description</p>
    </article>
  }
}

class ShopItemPricing extends React.Component {
  render() {
    return <div>
        Cena: this.props.price
        <button>Kup!</button>
    </div>
  }
}
class ShopItem extends React.Component {
  render() {
    return <div>
        {
          this.props.products.map(element => {
            return <div>
            <ShopItemHeader title={element.title}
            image={element.image}/>
            <ShopItemDescription/>
            <ShopItemPricing/>
            </div>;
          })
        }
    </div>;
  }
}


class App extends React.Component {
  render() {
      return <ShopItem products={this.props.products}/>
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App products={data}/>,
        document.getElementById('app')
    );
});
