import React from 'react';
import styled from 'styled-components';

// HEADINGS //
const MajorTitleStyled = styled.h1`
  font-size: 4rem;
  font-weight: 200;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`;
export const MajorTitle = props => {
  return (
    <MajorTitleStyled color={props.color} bgColor={props.bgColor}>
      {props.children}
    </MajorTitleStyled>
  );
};

export const MinorTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
`;
export const SubTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 400;
`;
export const MajorHeading = styled.h4`
  font-size: 2.4rem;
  font-weight: 200;
`;
export const MinorHeading = styled.h5`
  font-size: 2rem;
  font-weight: 400;
`;
export const SubHeading = styled.h6`
  font-size: 1.8rem;
  font-weight: 400;
`;
// PARAGRAPH //
const ParagraphStyled = styled.p.attrs({
  color: props => props.color || 'black',
  backgroundColor: props => props.bgColor || 'none'
})`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`;
export const Paragraph = props => {
  return (
    <ParagraphStyled color={props.color} bgColor={props.bgColor}>
      {props.children}
    </ParagraphStyled>
  );
};

// BLOCKQUOTE //
export const BlockQuote = styled.blockquote`
  font-size: 3rem;
  font-weight: 600;
`;

// FlOWTEXT //
export const FlowText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;
