import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin-right: 24px;
  margin-left: auto;
  margin-top: 24px;

  background-color: #808080;
  border: 2px solid #f29f05;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 24px;
`;

export const Button = styled.button`
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
