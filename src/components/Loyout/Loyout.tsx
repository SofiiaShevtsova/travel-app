import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LoyoutBox } from "./loyout_styles";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


const Loyout = () => {
  return (
    <LoyoutBox>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
      <Header />
    </LoyoutBox>
  );
};

export default Loyout;
