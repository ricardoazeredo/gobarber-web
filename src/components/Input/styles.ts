import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  //A margem é aplicada a partir do 1ª div(Container input).
  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  //O input está dentro do container
  input {
    flex: 1;
    background: #232129;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
  }
  /*Change text in autofill textbox*/
  input:-webkit-autofill {
    -webkit-text-fill-color: #f4ede8 !important;
  }
  svg {
    margin-right: 16px;
  }
`;
