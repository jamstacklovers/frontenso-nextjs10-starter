import React from 'react';

import Header from './header';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
