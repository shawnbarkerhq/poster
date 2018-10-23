import React, { Component } from 'react';

import GlobalStyle from './theme/globalStyle';
import HomePage from './features/pages/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <HomePage />
      </div>
    );
  }
}

export default App;
