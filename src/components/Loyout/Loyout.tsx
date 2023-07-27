import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from "../commons";
import { LoyoutBox } from "./loyout_styles";


export const Loyout = () => {
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
