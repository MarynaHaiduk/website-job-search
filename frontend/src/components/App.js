import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


import Nav from './Nav';
import Footer from './Footer';
import Search from './Search';
import ListJobs from './ListJobs';
import ListCategory from './ListCategory';


const mainStyle = {
    display: "flex",
};

class App extends Component {
  render() {
    return (
        <div>
          <Nav />
          <Search />
          <div style={mainStyle}>
              <ListCategory />
              <ListJobs />
          </div>
          <Footer />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
