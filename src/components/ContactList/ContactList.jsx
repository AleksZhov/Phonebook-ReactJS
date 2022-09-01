import * as React from 'react';
import './ContactList.css';
import { useSelector } from 'react-redux/es/exports';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'services/contactsApi';

function ContactList() {
  const { data } = useGetContactsQuery();
  const [deleteContact, { isFetching }] = useDeleteContactMutation();

  const filterValue = useSelector(state => state.filterValue.value);

  const getFilteredContacts = () => {
    if (!data) return;
    const filteredContactsArray = [...data].filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filteredContactsArray;
  };

  return (
    <ul className="contacts">
      {data &&
        getFilteredContacts().map(({ name, number, id }) => {
          return (
            <li key={id} className="contacts__item">
              <p>
                • {name} : {number}
              </p>
              <button
                type="button"
                className="contacts__del-btn"
                onClick={() => deleteContact(id)}
                disabled={isFetching}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;
