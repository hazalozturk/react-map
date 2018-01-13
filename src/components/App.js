import React from 'react';
import MyMap from './Map'
import KEY from '../Secrets'
import $ from 'jquery'
import ListView from './ListView'

class App extends React.Component {
  state={
    items: []
  }

  componentDidMount() {
    const self = this;
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" +
      $.param({
        language: "en",
        location: "43.08313,-73.784565",
        radius: "5000",
        type: "restaurant",
        key: "AIzaSyD8ytmcMHCODZTQoYVLtL7YQaFJnpb0oyk"})
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function (json) {
        self.setState({items: json.results})
      }
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1> Restaurant List of Saratoga Springs, NY </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"> <ListView items={this.state.items}/> </div>
          <div className="col-md-8"> <MyMap items={this.state.items} /> </div>
        </div>
      </div>
    );
  }
}

export default App
