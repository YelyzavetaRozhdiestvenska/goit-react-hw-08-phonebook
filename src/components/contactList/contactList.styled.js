import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 370px;
  color: #2a363b;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin: auto;
  padding: 10px;
`;

export const DeletButton = styled.button`
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: #f29f05;
  box-shadow: 0 5px 0 #d97d00;
  margin-right: 5px;
  margin-left: auto;

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
