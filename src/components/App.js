import React, {PropTypes} from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <p> Header here...</p>
        {console.log("App.props.children:" , this.props.children)}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
