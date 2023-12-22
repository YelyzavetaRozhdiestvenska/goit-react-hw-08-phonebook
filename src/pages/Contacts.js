import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from '../components/GlobalStyle';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactForm } from '../components/contactForm/ContactForm';
import { ContactList } from '../components/contactList/ContactList';
import { Filter } from '../components/filter/Filter';
import { Phonebook, Title } from './Contacts.styled';
import {
  selectContact,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <Helmet>
        <h1>Phonebook</h1>
      </Helmet>
      <ContactForm />
      <Title>Contacts</Title>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 ? <Filter /> : <p>Add contact!</p>}
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </Phonebook>
  );
}
