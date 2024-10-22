import React from 'react'
import s from'./Footer.module.css'
import Vector from '..//img/Vector 2.png'
import Ellipse from '..//img/Element1.png'
import Cube from '..//img/whoWeAreElement.png'
export default function Footer() {
  return (
    <div className={s.wrapper_Footer} id='Footer'>
        <div className={s.wrapper_Footer__BodyMenuItemsWithVector}>
            <div className={s.wrapper_Footer__MenuItemsWithVector}>
                <div className={s.wrapper_Footer__Vector}>
                    <img src={Vector}></img>
                </div>
                <div className={s.wrapper_Footer__menuitems}>
                    <nav>
                        <ul>
                            <li>
                                <a>HOME</a>
                            </li>
                            <li>
                                <a>Who we are</a>
                            </li>
                            <li>
                                <a>Services</a>
                            </li>
                            <li>
                                <a>Indusrty expertise</a>
                            </li>
                            <li>
                                <a>OUR STAcK</a>
                            </li>
                            <li className={s.wrapper_Footer__menuitemsProject}>
                                <a>Projeсts</a>
                            </li>
                            <li>
                                <a>Reviews</a>
                            </li>
                            <li>
                                <a>Contaсts</a>
                            </li>
                            <li>
                                <a>Career</a>
                            </li>
                            <li>
                                <a>Blog</a>
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
                <img src={Ellipse}></img>
            </div>
            <div className={s.wrapper_Footer__Elements}>
                <img src={Cube}></img>
            </div>

        </div>
    </div>
  )
}
