import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HeaderContainer from "./Components/Header/HeaderContainer";
import HomeContainer from "./Components/Home/HomeContainer";
import Contacts from "./Components/Contacts/Contacts";
import Expertise from "./Components/Expertise/Expertise";
import Projects from "./Components/Projects/Projects";
import CookiesPrivacy from "./Components/CookiesPrivacy/CookiesPrivacy";
import Services from "./Components/Services/Services";
import ContactUs from "./Components/ContactsUs/ContactUs";
import FooterContainer from "./Components/Footer/FooterContainer";
import CareerContainer from "./Components/Career/CareerContainer";
import Preloader from "./Components/Preloader/Preloader";
// import OrderContainer from "./Components/Order/OrderContainer";
// import OrdersContainer from "./Components/Orders/OrdersContainer";

const OrderContainer = React.lazy(() =>
  import("./Components/Order/OrderContainer")
);
const OrdersContainer = React.lazy(() =>
  import("./Components/Orders/OrdersContainer")
);

// import NotFound from "./Components/NotFound/NotFound";
const NotFound = React.lazy(() => import("./Components/NotFound/NotFound"));

class App extends React.Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">
        <div id="page-preloader" className="preloader">
          <div className="loader"></div>
        </div>
        <HeaderContainer />
        <main className="wrapper-content" id="main">
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Routes>
              <Route path="/RivoAgency" element={<HomeContainer />}></Route>
              <Route path="/Expertise" element={<Expertise />}></Route>
              <Route path="/Career" element={<CareerContainer />}></Route>
              <Route path="/Projects" element={<Projects />}></Route>
              <Route path="/Contacts" element={<Contacts />}></Route>
              <Route path="/Orders" element={<OrdersContainer />}></Route>
              <Route path="/Services" element={<Services />}></Route>
              <Route
                path="/Orders/Order/:carId"
                element={<OrderContainer />}
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route path="/" element={<HomeContainer />}></Route>
            </Routes>
          </Suspense>
        </main>
        <FooterContainer />
        <CookiesPrivacy />
        <ContactUs />
      </div>
    );
  }
}

export default App;
