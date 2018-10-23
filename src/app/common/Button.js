import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button.attrs({
  color: props => props.txtColor || 'black',
  backgroundcolor: props => props.bgColor || 'inherit',
  borderradius: props => props.roundNess || 'none'
})`
  padding: ${props => props.padding};
  border: ${props => (props.borderOn ? '1px solid' : 'none')};
  border-color: ${props => props.borderColor};
  margin: 0.5rem;
  box-shadow: ${props =>
    props.shadowOn ? '0 1rem 2rem rgba(0,0,0,.3)' : 'none'};
  color: ${props => props.txtColor};
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.roundNess};
  &:hover {
    box-shadow: ${props =>
      props.shadowOn ? '0 .5rem 1rem rgba(0,0,0,.3)' : 'none'};
    cursor: pointer;
  }
`;
// WAVES EFFECT //
// WAVE COLORS //
export const Button = props => {
  return (
    <ButtonStyled
      txtColor={props.txtColor}
      bgColor={props.bgColor}
      roundNess={props.roundNess}
      shadowOn={props.shadowOn}
      borderOn={props.borderOn}
      borderColor={props.borderColor}
      padding={props.padding}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
