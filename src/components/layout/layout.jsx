import { Outlet } from "react-router-dom";
import { Footer } from "../../ui/footer";
import { Header } from "../../ui/header";
export const Layouts = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  ); 
};
