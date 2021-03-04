import React from 'react';
import Link from 'next/link';
import { styled } from '@linaria/react';

import Container from './container';

const StyledHeader = styled.header`
  color: #fff;
  background-color: lightslategray;
  height: 100px;
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <Link href="/">Header Example</Link>
    </Container>
  </StyledHeader>
);

export default Header;
