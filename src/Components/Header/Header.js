import React from 'react'
import { MdArrowOutward } from 'react-icons/md';
import logotype from './/../img/Rivo_logotype.png';
import { GoChevronDown } from 'react-icons/go';
import { NavLink} from 'react-router-dom';
import s from'./Header.module.css'

export default function Header() {


  return (
    <header className={s.header}>
        <div className={s.container}>
        <div className={s.header__body}>            
            <NavLink to={''}>
            <img src={logotype}/>
            </NavLink>
            <div className={s.header__buttons_items}>
            <div className={s.header__items}>
         
                    <ul className={s.header__items_items}>
                        <li>
                           <NavLink to={'/Services'}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Projects'}>Projects</NavLink>
                        </li>
                        <li>
                            <nav className={s.Expertise}>Expertise
                                <ul>
                                    <ul id={s.submenu}>
                                        <li>
                                            <NavLink to={'/Healthcare&Fitness'} >Healthcare & Fitness</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/Retail&Ecommerce'} >Retail & Ecommerce</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/Real&Estate'} >Real & Estate</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/Custom&CRM'} >Custom & CRM</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/Education&E-Learning'} >Education & E-Learning</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/Food&Restaurant'} >Food & Restaurant</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/Retail&E-Commerce'} >Retail & E-Commerce</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/Logistic&Distribution'} >Logistic & Distribution</NavLink>
                                        </li>
                                    </ul>
                                </ul>
                                <GoChevronDown className='Expertise_GoChevronDown'/>
                            </nav>
                        </li>
                        <li>
                            <a href='#'>Contacts</a>
                        </li>
                        <li>
                            <NavLink to={'/Careers'} className={s.Hot}>Careers</NavLink>
                        </li>
                    </ul>
            </div>
            <NavLink className={s.makeOrder_Button}  to={'/Orders'}>
                <p>MAKE ORDER</p> 
                <MdArrowOutward className='makeOrder_Button__arrow'/>
            </NavLink>
            <div className={s.headerMainMenu}>
                <div className={s.hamburger}></div>
                 <NavLink to={'/FilterableProductTable'}>MENU</NavLink>
            </div>
        </div>
        </div>
    </div>

    </header>
    
  )
}
