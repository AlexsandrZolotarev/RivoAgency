import React from 'react'
import s from './Services.module.css'
import item1 from '../img/Services/Custom_development_icon.png'
import item2 from '../img/Services/Mobile_development_icon.png'
import item3 from '../img/Services/Web_development_icon.png'
import { HiMiniArrowUpRight } from "react-icons/hi2";
export default function Services() {
  return (
    <div className={s.Service}>
        <div className={s.ServiceTitle}>
            <p>Services</p>
            <p>Services</p>
        </div>
    <div className={s.ServiceItems}>
        <div className={s.ContainerServiceItems}>
            <div className={s.ServiceItem +' Item'}>
                <div className={s.ServiceItem_Icon}>
                    <img src={item3}></img>       
                </div>  
                <div className={s.ServiceItem_Title}>
                    <p>Web Development</p>    
                </div>  
                <div className={s.ServiceItem_Text}>
                    <p>Start developing your software with us to increase your business efficiency and gain an influx of potential customers. Having 10+ years of experience as a web and mobile app development company, we know how to create fast and powerful web apps that will serve your business for years.</p>    
                </div>
                <div className={s.ServiceItem + ' ServiveButton'}>
                    <a>Make order</a>
                    <HiMiniArrowUpRight className={s.ServiceItem_Arrow}/>     
                </div>    
            </div> 
            <div className={s.ServiceItem + ' Item'}>
                <div className={s.ServiceItem_Icon}>
                    <img src={item2}></img>       
                </div>  
                <div className={s.ServiceItem_Title}>
                    <p>Mobile Development</p>    
                </div>  
                <div className={s.ServiceItem_Text}>
                    <p>Request mobile apps development at Rivo Agency to expose your business to a large audience, keep in touch with your clients, discover their needs, and win their loyalty. Our app developers create custom solutions for iOS and Android devices that simplify customer experience.</p>
                </div>
                <div className={s.ServiceItem + ' ServiveButton'}>
                    <a>Make order</a> 
                    <HiMiniArrowUpRight className={s.ServiceItem_Arrow} /> 
                </div>    
            </div> 
            <div className={s.ServiceItem + ' Item'}>
                <div className={s.ServiceItem_Icon}>
                    <img src={item1}></img>       
                </div>  
                <div className={s.ServiceItem_Title}>
                    <p>Custom Software</p>    
                </div>  
                <div className={s.ServiceItem_Text}>
                    <p>Using strong expertise across various technology stacks and industries, we deliver custom software tailored to your specific business needs. Our experts design and develop fast-loading, secure, and scalable SaaS solution that is easily integrated with third-party services.</p>    
                </div>
                <div className={s.ServiceItem + ' ServiveButton'}>
                    <a>Make order</a> 
                    <HiMiniArrowUpRight className={s.ServiceItem_Arrow} />    
                </div>    
            </div>
        </div>
        </div>
    </div>
  )
}
