import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Here be Dragons</h1>
        <Link to="cv" className="btn btn-primary btn-lg">Go to CV</Link>
      </div>
    );
  }
}

export default HomePage;
