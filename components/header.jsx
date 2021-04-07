import React from 'react';
import Link from 'next/link';

import Container from './container';

const Header = () => (
  <header className="bg-gray-200">
    <Container>
      <Link href="/">Header Example</Link>
    </Container>
  </header>
);

export default Header;
