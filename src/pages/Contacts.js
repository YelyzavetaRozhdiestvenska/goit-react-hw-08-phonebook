import {
  selectContact,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';

import GlobalStyle from '../components/GlobalStyle';
import { ContactForm } from '../components/contactForm/ContactForm';
import { ContactList } from '../components/contactList/ContactList';
import { Filter } from '../components/filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 ? <Filter /> : <p>Add contact!</p>}
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </div>
  );
};
