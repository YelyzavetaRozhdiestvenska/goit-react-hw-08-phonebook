import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledLabel,
  StyledButton,
  StyledErrorMessage,
  StyledField,
} from './contactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Number(xxx-xx-xx)!')
    .min(9, 'Too Short!')
    .required('Required'),
});

export function ContactForm() {
  const allContacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (allContacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContacts({ ...values }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledLabel>Name</StyledLabel>
          <StyledField type="text" name="name" />
          <StyledErrorMessage name="name" component="div" />
          <StyledLabel>Number</StyledLabel>
          <StyledField type="tel" name="number" />
          <StyledErrorMessage name="number" component="div" />
          <StyledButton type="">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
}
