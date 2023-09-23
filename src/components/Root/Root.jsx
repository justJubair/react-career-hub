import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect } from "react";

const Root = () => {
  const loc = useLocation();

  useEffect(()=>{
    if(loc.pathname === '/'){
      document.title = 'Career Hub'
    } else {
      document.title = loc.pathname.replace('/', '')
    }
    if(loc.state){
      document.title = loc.state
    }
   
  },[loc.pathname, loc.state])
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
