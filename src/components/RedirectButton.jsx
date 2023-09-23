import React from 'react';

class RedirectButton extends React.Component {
    render() {
      return (
        <a href="https://www.nike.com/in/" target="_blank" rel="noopener noreferrer">
          <button>
            Shop now!
          </button>
        </a>
      );
    }
  }

export default RedirectButton;
