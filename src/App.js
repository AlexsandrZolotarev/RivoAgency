import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import Expertise from './Components/Expertise/Expertise';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import notFound from './Components/NotFound/NotFound';
import CookiesPrivacy from './Components/CookiesPrivacy/CookiesPrivacy';
import ContactsUs from './assets/img/Contact us big.webp';
import Arrow from './assets/Icons/ArrowBig_icon.webp';
import CareersContainer from './Components/Careers/CareersContainer';
import HomeContainer from './Components/Home/HomeContainer';
import OrdersContainer from './Components/Orders/OrdersContainer';
import NotFound from './Components/NotFound/NotFound';

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
      <div id='page-preloader' className='preloader'>
        <div className='loader'></div>
      </div> 
        <Header/>
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
            <Route path ='*' element ={<NotFound/>}>
            </Route>
          </Routes>
        </main>
        <Footer/>  
       <CookiesPrivacy/>
              <a className='ContactUs' href='#ContactUs' aria-label='Contacts' id='ContactUs'>
                <img alt='' src={ContactsUs} aria-hidden='true'></img>
                <img alt='' src={Arrow} aria-hidden='true'></img>
              </a>
      </div>
    );
  }
}



export default App;

