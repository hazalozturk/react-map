import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1> Name </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"> A </div>
          <div className="col-md-8"> B </div>
        </div>
      </div>
    );
  }
}

export default App
