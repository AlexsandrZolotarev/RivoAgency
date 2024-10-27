import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';
import Expertise from './Components/Expertise/Expertise';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CookiesPrivacy from './Components/CookiesPrivacy/CookiesPrivacy';
import ContactsUs from './Components/img/Contact us big.png';
import Arrow from './Components/img/Icons/ArrowBig_icon.png';
import CareersContainer from './Components/Careers/CareersContainer';
import HomeContainer from './Components/Home/HomeContainer';
import OrdersContainer from './Components/Orders/OrdersContainer';

class App extends React.Component
{ 
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <div className='wrapper'>

        <Header/>
        <div className='wrapper-content'>
          <Routes>
            <Route path ='/RivoAgancy' element ={<HomeContainer/>}>
            </Route>
            <Route path ='/Services' element ={<Services/>}>
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
          </Routes>
        </div>
        <Footer/>  
       <CookiesPrivacy/>
              <a className='ContactUs' href='#Footer' aria-label='Contacts'>
                <img alt='' src={ContactsUs} aria-hidden='true'></img>
                <img alt='' src={Arrow} aria-hidden='true'></img>
              </a>
      </div>
    );
  }
}



export default App;

