import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Category from './Category';


class App extends Component {
  render() {
    return (
        <div classname="main">
          <Nav />
          <Main />
          <Category />
          <Footer />

        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));