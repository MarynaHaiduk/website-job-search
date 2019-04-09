import React, { Component } from 'react';


const listCategoryStyle = {
        lineHeight: 0.5,
        marginLeft: "120px",
        flex: 0.5,
      };

class ListCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

   componentDidMount() {
        fetch('http://127.0.0.1:8000/api/category')
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
              <div style={listCategoryStyle}>
                  {items.map(item =>(
                      <p><a href="#">{item.category_name}</a></p>)
                  )}
              </div>
          );
      }
  }
}

export default ListCategory;
