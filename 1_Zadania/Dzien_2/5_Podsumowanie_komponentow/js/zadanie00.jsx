import React from 'react';
import ReactDOM from 'react-dom';
import shopping from "./zadanie02";


document.addEventListener('DOMContentLoaded', function(){

  const prices = shopping.map(element => {
    return element.price * element.count
  });
class ReceiptHeader extends React.Component {
  render() {
    return <thead>
      <tr>
          <th>Nazwa</th>
          <th>Cena/1</th>
          <th>Ilość</th>
          <th>Łączna cena</th>
      </tr>
    </thead>
  }
}

class ReceiptItems extends React.Component {
  render() {
    return <tbody>
        {
          this.props.products.map(element => {
            return <ReceiptItem name={element.name} price={
              element.price} count={element.count}/>
          })
        }
    </tbody>
  }
}
class ReceiptItem extends React.Component {
render() {
  return <tr>
    <td>
      {this.props.name}
    </td>
    <td>
      {this.props.price}
    </td>
    <td>
      {this.props.count}
    </td>
    <td>
      {this.props.price * this.props.count}
    </td>
  </tr>
}
}

class ReceiptFooter extends React.Component {
  render() {
    return <tfoot>
      <tr>
          <td>
              RAZEM
          </td>
          <td>
              -
          </td>
          <td>
              -
          </td>
          <td>
              {
                  prices.reduce((prev, curr) => {
                    return prev + curr;
                  })
            }
          </td>
      </tr>
    </tfoot>
  }
}
  class Receipt extends React.Component {
    render() {
      return <table>
          <ReceiptHeader/>
          <ReceiptItems products={this.props.items}/>
          <ReceiptFooter products={this.props.items}/>
      </table>;
    }
  }
  class App extends React.Component {
    render() {
      return <Receipt items={shopping}/>
    }
  }
  ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('app')
  );
});
