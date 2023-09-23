import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect } from "react";

const Root = () => {
  const loc = useLocation();
  console.log(loc)
  useEffect(()=>{
    console.log(loc.pathname)
  },[loc.pathname])
  return (
    <div>
     <div className="max-w-screen-lg mx-auto pt-4">
     <Header/>
      <Outlet/>
     </div>
      <Footer/>
    </div>
  );
};

export default Root;
