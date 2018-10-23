import React, { Component } from 'react';
import styled from 'styled-components';

import { MajorTitle, MinorHeading } from '../../app/common/Typography';
import Button from '../../app/common/Button';
import { ButtonGroup, TextGroup } from '../../app/common/Group';

const StyledHero = styled.section`
  padding: 6rem;
  border-bottom: 1px solid white;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Hero extends Component {
  render() {
    return (
      <StyledHero>
        <HeroContainer>
          <TextGroup>
            <MajorTitle>ShawnBarker HQ</MajorTitle>
            <MinorHeading>Don't feel better. Be better.</MinorHeading>
          </TextGroup>
          <ButtonGroup>
            <Button
              bgColor={'transparent'}
              txtColor={'blue'}
              roundNess={'100px'}
              borderOn
              borderColor={'blue'}
              padding={'1rem 2rem'}
            >
              Outline
            </Button>
            <Button
              bgColor={'blue'}
              txtColor={'white'}
              roundNess={'100px'}
              padding={'1rem 2rem'}
            >
              Opaque
            </Button>
          </ButtonGroup>
        </HeroContainer>
      </StyledHero>
    );
  }
}

export default Hero;
