import * as React from 'react';
import './ContactList.css';
import { useSelector } from 'react-redux/es/exports';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'services/contactsApi';
import { Section, H2 } from './ContactList.styled';

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
    <>
      <Section className="contacts">
        <H2 className="contacts__title">Contacts</H2>
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
      </Section>
    </>
  );
}

export default ContactList;
