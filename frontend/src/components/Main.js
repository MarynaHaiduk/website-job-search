import React, { Component } from 'react';


class Main extends Component {

  render() {
      const divStyle = {
        color: 'blue',
        margin: 100,
        marginBottom: 30,
      };

    return (
        <div style={divStyle} className="search-form">
          <form method="get">
            <div className="form-row">
              <div className="col-7">
                <label for="text-input-what">What</label>
                <input type="text" className="form-control" placeholder="Title" />
              </div>

              <div className="col">
                <label htmlFor="text-input-company">Company</label>
                <input type="text" className="form-control" placeholder="Company" />
              </div>

              <div className="col">
                <label htmlFor="text-input-location">Location</label>
                <input type="text" className="form-control" placeholder="Location" />
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default Main;