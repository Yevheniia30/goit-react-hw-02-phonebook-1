import React, { Component } from 'react';
import shortid from 'shortid';
// import s from './App.module.css';
import Form from './Components/Form';
import ContactsList from './Components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
  };

  // ф-ция для получения данных введенных в форму
  formOnSubmitHandler = ({ name, number }) => {
    // console.log(data);
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    // добавляем каждый введенный контакт в массив
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App-main">
        {/* пропс onSubmit */}
        <Form onSubmit={this.formOnSubmitHandler} />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
