import React, { Component } from 'react';
import './App.css';
import SimpleForm from './SimpleForm';

class App extends Component {

  state = {
    value: ''
  }

  inputChangedHandler = (event) => {
    this.setState({value: event.target.value});
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    alert('form submitted');
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2" style={{marginTop:'20px'}}>
        <SimpleForm />
      </div>
    )
  }
}

export default App;
