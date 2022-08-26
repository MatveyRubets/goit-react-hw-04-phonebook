import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <strong>Name</strong>
      <br />
      <input
        onChange={e => setName(e.target.value)}
        type="text"
        name="name"
        value={name}
        placeholder="Homer Simpson"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <br />
      <strong>Number</strong>
      <br />
      <input
        onChange={e => setNumber(e.target.value)}
        type="tel"
        name="number"
        value={number}
        placeholder="044-444-00-44"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <br />
      <button>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
