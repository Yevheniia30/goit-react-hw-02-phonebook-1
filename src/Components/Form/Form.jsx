import React, { Component } from 'react';
import shortid from 'shortid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  // ф-ция воода данных в любой инпут по атрибуту name
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  // ф-ция сабмит на форме
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  // очистка формы после сабмита
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={s.label}>
          Name
          <input
            type="text"
            name="name"
            className={s.input}
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId} className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            className={s.input}
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
