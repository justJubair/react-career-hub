import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
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
