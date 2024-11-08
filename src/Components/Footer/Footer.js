import React from 'react'
import s from'./Footer.module.css'
import Vector from '..//img/Vector 2.png'
import Ellipse from '..//img/Element1.png'
import Cube from '..//img/whoWeAreElement.png'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div className={s.wrapper_Footer} id='Footer'>
        <div className={s.wrapper_Footer__BodyMenuItemsWithVector}>
            <div className={s.wrapper_Footer__MenuItemsWithVector}>
                <div className={s.wrapper_Footer__Vector}>
                    <img src={Vector}aria-hidden='true' loading="lazy" ></img>
                </div>
                <div className={s.wrapper_Footer__menuitems}>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={'/RivoAgancy'}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Services'}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Projects'}>Projeсts</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Contacts'}>Contaсts</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Careers'}>Careers</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.wrapper_Footer__Copyright}>
                        <p>2024 © Rivo Agency</p>
                        <p>Privacy Policy & Term of Use</p>
                    </div>
                </div>
            </div>    
        </div>
        <div className={s.wrapper_Footer__EllipseWithElements}>

            <div className={s.wrapper_Footer__Ellipse}>
                <img src={Ellipse} aria-hidden='true' loading="lazy"></img>
            </div>
            <div className={s.wrapper_Footer__Elements}>
                <img src={Cube} aria-hidden='true' loading="lazy"></img>
            </div>

        </div>
    </div>
  )
}
