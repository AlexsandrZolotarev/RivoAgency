import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import Expertise from "./Components/Expertise/Expertise";
import Projects from "./Components/Projects/Projects";
import CookiesPrivacy from "./Components/CookiesPrivacy/CookiesPrivacy";
import CareerContainer from "./Components/Career/CareerContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import OrdersContainer from "./Components/Orders/OrdersContainer";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";
import ContactUs from "./Components/ContactsUs/ContactUs";
import FooterContainer from "./Components/Footer/FooterContainer";
import OrderContainer from "./Components/Order/OrderContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">
        <div id="page-preloader" className="preloader">
          <div className="loader"></div>
        </div>
        <HeaderContainer />
        <main className="wrapper-content" id="main">
          <Routes>
            <Route path="/RivoAgency" element={<HomeContainer />}></Route>
            <Route path="/Expertise" element={<Expertise />}></Route>
            <Route path="/Career" element={<CareerContainer />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Contacts" element={<Contacts />}></Route>
            <Route path="/Orders" element={<OrdersContainer />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Orders/Order/:carId" element={<OrderContainer />}></Route>
            {/* <Route path="/Profile" element={<ProfileContainer />}></Route> */}
            {/* <Route path="/Login" element={<LoginContainer />}></Route> */}
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/" element={<HomeContainer />}></Route>
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
