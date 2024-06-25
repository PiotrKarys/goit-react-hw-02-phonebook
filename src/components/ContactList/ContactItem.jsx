import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.item}>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => onDeleteContact(id)} className={styles.button}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
