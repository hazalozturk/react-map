import React from "react";
import MyMap from "./Map"

class ListView extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log('MY HUSBAND IS AN ASSHOLE!');
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item) =>
          <li key={item.id} onClick={this.handleClick}>
            <h4 className='placeName'>{item.name}</h4>
            <p className='placeVicinity'>{item.vicinity}</p>
          </li>
        )}
      </ul>
    )
  }
}

export default ListView
