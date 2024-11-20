import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import Expertise from './Components/Expertise/Expertise';
import Projects from './Components/Projects/Projects';
import CookiesPrivacy from './Components/CookiesPrivacy/CookiesPrivacy';
import CareersContainer from './Components/Careers/CareersContainer';
import HomeContainer from './Components/Home/HomeContainer';
import OrdersContainer from './Components/Orders/OrdersContainer';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import HeaderContainer from './Components/Header/HeaderContainer';
import ContactUs from './Components/ContactsUs/ContactUs';
import FooterContainer from './Components/Footer/FooterContainer';
class App extends React.Component
{ 
  render()
  {
    return (
      <div className='wrapper'>
      <div id='page-preloader' className='preloader'>
        <div className='loader'></div>
      </div> 
        <HeaderContainer/>
        <main className='wrapper-content'>
          <Routes>
            <Route path ='/RivoAgancy' element ={<HomeContainer/>}>
            </Route>
            <Route path ='/Expertise' element ={<Expertise/>}>
            </Route> 
            <Route path ='/Careers' element ={<CareersContainer/>}>
            </Route>
            <Route path ='/Projects' element ={<Projects/>}>
            </Route>
            <Route path ='/Contacts' element ={<Contacts/>}>
            </Route>
            <Route path ='/Orders' element ={<OrdersContainer/>}>
            </Route>
            <Route path ='/Services' element ={<Services/>}>
            </Route>
            <Route path ='*' element ={<NotFound/>}>
            </Route>
          </Routes>
        </main>
        <FooterContainer/>  
        <CookiesPrivacy/>
        <ContactUs/>
      </div>
    );
  }
}


export default App;

