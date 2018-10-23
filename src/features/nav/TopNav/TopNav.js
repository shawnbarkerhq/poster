import React, { Component } from 'react';
import styled from 'styled-components';

import { Laptop, User } from '../../svg/SVG';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`;
const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-left: 14rem;
`;

const LogoText = styled.h3`
  color: white;
`;
const TopSearch = styled.input`
  margin-left: auto;
`;
const TopUserNav = styled.ul`
  margin-right: 14rem;
`;

export class TopNav extends Component {
  render() {
    return (
      <Header>
        <LogoGroup>
          <Laptop />
          <LogoText>Shawn Barker HQ</LogoText>
        </LogoGroup>
        <TopSearch />
        <TopUserNav>
          <User />
        </TopUserNav>
      </Header>
    );
  }
}

export default TopNav;
