import { useState } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './Contacts/ContactsFilter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const CONTACTS_KEY = 'contacts';
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS_KEY)) ?? []
  );
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem(CONTACTS_KEY) !== null) {
      setContacts(JSON.parse(localStorage.getItem(CONTACTS_KEY)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // const handlerChange = evt => {
  //   setFilter(evt.target.value);
  // };

  const filter = useSelector(getFilter);
  const contactsList = useSelector(getContacts);

  const visibleName = contactsList?.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h2 style={{ marginLeft: '20px' }}>Phonebook</h2>
      <PhoneBookForm />
      <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
      <ContactsFilter />
      <Contacts contacts={visibleName} />
    </>
  );
};
