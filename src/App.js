import React, { Component } from 'react';
// import s from './App.module.css';
import Form from './Components/Form';
// import ContactsList from './Components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
  };

  // ф-ция для получения данных введенных в форму
  formOnSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="App-main">
        {/* пропс onSubmit */}
        <Form onSubmit={this.formOnSubmitHandler} />
      </div>
    );
  }
}

export default App;
