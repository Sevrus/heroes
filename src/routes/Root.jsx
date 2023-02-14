import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";

const Root = () => {
  return(
      <>
          <Header/>
          <Content/>

          <div id="main">
              <Outlet/>
          </div>
          <Footer/>
      </>
  )
}

export default Root;