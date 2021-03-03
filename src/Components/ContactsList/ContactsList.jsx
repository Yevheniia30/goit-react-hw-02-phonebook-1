// import React, { Component } from 'react';
// import s from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
