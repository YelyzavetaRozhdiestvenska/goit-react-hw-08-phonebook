import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Useremail = styled.p`
  font-weight: 700;
  color: #2a363b;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: #808080;
  box-shadow: 0 5px 0 #2a363b;
  margin-bottom: 24px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 24px;

  &:hover {
    background: #2a363b;
    box-shadow: none;
    position: relative;
    top: 5px;
    cursor: pointer;
  }

  &:active {
    background: #2a363b;
    box-shadow: none;
    position: relative;
    top: 5px;
    scale: 0.9;
  }
`;
