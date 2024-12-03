import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import Expertise from "./Components/Expertise/Expertise";
import Projects from "./Components/Projects/Projects";
import CookiesPrivacy from "./Components/CookiesPrivacy/CookiesPrivacy";
import CareersContainer from "./Components/Careers/CareersContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import OrdersContainer from "./Components/Orders/OrdersContainer";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";
import ContactUs from "./Components/ContactsUs/ContactUs";
import FooterContainer from "./Components/Footer/FooterContainer";
import MenuBurgerContainer from "./Components/MenuBurger/MenuBurgerContainer";
import OrderContainer from "./Components/Order/OrderContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/LoginForm";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">
        <div id="page-preloader" className="preloader">
          <div className="loader"></div>
        </div>
        <MenuBurgerContainer pageWrapId={"main"} outerContainerId={"wrapper"} />
        <HeaderContainer />
        <main className="wrapper-content" id="main">
          <Routes>
            <Route path="/RivoAgancy" element={<HomeContainer />}></Route>
            <Route path="/RivoAgancy/Expertise" element={<Expertise />}></Route>
            <Route
              path="/RivoAgancy/Careers"
              element={<CareersContainer />}
            ></Route>
            <Route path="/RivoAgancy/Projects" element={<Projects />}></Route>
            <Route path="/RivoAgancy/Contacts" element={<Contacts />}></Route>
            <Route
              path="/RivoAgancy/Orders"
              element={<OrdersContainer />}
            ></Route>
            <Route path="/RivoAgancy/Services" element={<Services />}></Route>
            <Route
              path="/RivoAgancy/Order/:carId"
              element={<OrderContainer />}
            ></Route>
             <Route
              path="/RivoAgancy/Login"
              element={<Login/>}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <FooterContainer />
        <CookiesPrivacy />
        <ContactUs />
      </div>
    );
  }
}

export default App;
