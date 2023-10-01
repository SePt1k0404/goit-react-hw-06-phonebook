import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './Contacts/ContactsFilter';

export const App = () => {
  return (
    <>
      <h2 style={{ marginLeft: '20px' }}>Phonebook</h2>
      <PhoneBookForm />
      <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
      <ContactsFilter />
      <Contacts />
    </>
  );
};
