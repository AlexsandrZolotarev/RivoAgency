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
import Header from "./Components/Header/Header";
import OrderContainer from "./Components/Order/OrderContainer";


class App extends React.Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">
        <div id="page-preloader" className="preloader">
          <div className="loader"></div>
        </div>
        <MenuBurgerContainer pageWrapId={"main"} outerContainerId={"wrapper"} />
        <Header />
        <main className="wrapper-content" id="main">
          <Routes>
            <Route path="/RivoAgancy" element={<HomeContainer />}></Route>
            <Route path="/Expertise" element={<Expertise />}></Route>
            <Route path="/Careers" element={<CareersContainer />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Contacts" element={<Contacts />}></Route>
            <Route path="/Orders" element={<OrdersContainer />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Order/:carId" element={<OrderContainer/>}></Route>
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
