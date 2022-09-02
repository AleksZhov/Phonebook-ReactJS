import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <>
      <h1>Add new contact</h1>
      <ContactForm />

      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
