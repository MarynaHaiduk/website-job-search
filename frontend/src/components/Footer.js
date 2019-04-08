import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
        <footer className="py-5 bg-dark fixed-bottom">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; JobSearch, Website 2019</p>
            </div>
        </footer>
    );
  }
}

export default Footer;