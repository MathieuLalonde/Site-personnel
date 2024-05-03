import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <NavBar />
      <div id="main">

        {/* Note: ScrollRestoration directs links to the top of each page */}
        <Outlet />
      </div>
      <Footer />
      {/* <ScrollRestoration /> */}
    </>
  );
};

export default Layout;
