import React from 'react';
import ReactDOM from 'react-dom';

const menuItems = [
      {
          urL     :   '/',
          text    :   'Strona główna'
      },
      {
          urL     :   '/blog',
          text    :   'Blog'
      },
      {
          urL     :   '/pricing',
          text    :   'Cennik'
      },
      {
          urL     :   '/contact',
          text    :   'Kontakt'
      }
  ];
class Menu extends React.Component {
  render() {
    return <ul>
        {this.props.items.map(element =>{
          return <li>
              <a href={element.urL}>
                {element.text}
              </a>
            </li>
        })}
      </ul>;
  }
};
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Menu items={menuItems}/>,
        document.getElementById('app')
    );
});
