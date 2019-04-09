import React, { Component } from 'react';


const itemsStyle = {
        listStyleType: 'none',
      };

const listJobsStyle = {
        textAlign: 'left',
        marginRight: "100px",
        flex: 3,
      };

class ListJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

   componentDidMount() {
        fetch('http://127.0.0.1:8000/api/job')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    }
                )
            });
   }

  render() {
      var {isLoaded, items} = this.state;

      if (!isLoaded) {
          return <div>Loading...</div>;
      }

      else {
          return (
              <div style={listJobsStyle}>
                  {items.map(item =>(
                      <ul key={item.id}>
                          <li style={ itemsStyle }> <a href="#">{item.title}</a></li>
                          <li style={ itemsStyle }>{item.company}, <i>{item.location}</i></li>
                          <li style={ itemsStyle }>{item.description}</li>
                      </ul>
                          )
                      )}
              </div>
          );
      }
  }
}

export default ListJobs;
