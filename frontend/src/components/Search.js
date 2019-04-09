import React, { Component } from 'react';


class Search extends Component {

  render() {
      const searchStyle = {
        color: 'blue',
        margin: 120,
        marginBottom: 30,
      };

    return (

        <div style={searchStyle} className="search-form">
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

export default Search;
