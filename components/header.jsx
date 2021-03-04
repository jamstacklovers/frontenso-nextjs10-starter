import React from 'react';
import Link from 'next/link';
import { styled } from '@linaria/react';

const StyledHeader = styled.header`
  color: #fff;
  background-color: lightslategray;
  height: 100px;
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">Header Example</Link>
  </StyledHeader>
);

export default Header;
