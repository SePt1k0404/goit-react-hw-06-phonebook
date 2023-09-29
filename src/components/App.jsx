import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './Contacts/ContactsFilter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
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
