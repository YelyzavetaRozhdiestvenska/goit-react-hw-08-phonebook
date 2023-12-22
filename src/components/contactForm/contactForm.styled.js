import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 360px;
  padding: 5px;
  background-color: #808080;
`;

export const StyledLabel = styled.label`
  padding: 3px;
  color: #2a363b;
`;

export const StyledField = styled(Field)`
  width: 350px;
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  color: #d97d00;
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: #f29f05;
  box-shadow: 0 5px 0 #d97d00;
  margin-bottom: 24px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 24px;

  &:hover {
    background: #d97d00;
    box-shadow: none;
    position: relative;
    top: 5px;
    cursor: pointer;
  }

  &:active {
    background: #d97d00;
    box-shadow: none;
    position: relative;
    top: 5px;
    scale: 0.9;
  }
`;
