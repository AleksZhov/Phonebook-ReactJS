import styled from '@emotion/styled';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  background-color: yellowgreen;
  margin-bottom: 30px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.6);
  margin: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-right: 50px;
  padding-top: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  background-color: blue;
  font-weight: 500;
  height: 35px;
  border: none;
  padding: 8px 16px;
  border: 2px solid purple;
`;
