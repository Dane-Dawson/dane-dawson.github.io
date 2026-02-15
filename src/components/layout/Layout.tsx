import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where your routes will swap in and out */}
      </main>
    </>
  );
};

export default Layout;