import React, { Component } from 'react';

const itemsStyle = {
        listStyleType: 'none'
      };

class Category extends Component {
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
              <div>
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


export default Category;