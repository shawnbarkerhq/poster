import React, { Component } from 'react';
import TopNav from '../nav/TopNav/TopNav';
import Hero from '../hero/Hero';
import Main from '../main/Main';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Hero />
        <Main />
      </div>
    );
  }
}

export default HomePage;
