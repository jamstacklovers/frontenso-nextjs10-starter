import Header from './header';

function Layout(props) {
  let { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
