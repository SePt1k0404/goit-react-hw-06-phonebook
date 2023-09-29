import { ContactsItem } from './ContactsItem';
import { ContactsList, ContactsListItem } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  const contactsArr = contacts?.map(el => (
    <ContactsListItem key={el.id}>
      <ContactsItem name={el.name} number={el.number} />
    </ContactsListItem>
  ));
  return (
    <>
      <ContactsList>{contactsArr}</ContactsList>
    </>
  );
};
