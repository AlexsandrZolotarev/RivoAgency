import React, { useRef, useState }  from "react";
import s from './Orders.module.css'
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { PiArrowDownLight } from "react-icons/pi";

import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Pagination, Navigation } from 'swiper/modules';
function Album({car})
{
    return (
            <div className={s.OrdersBodyTitleAlbum}>
            <table>
                <caption>{car.model}</caption>
            <tbody>
                <th>
                    <th>Brand</th>
                    <td>{car.brand}</td>
                </th>
                <th>
                    <th>Cluth Rewiew</th>
                    <td>{car.cluthRewiew}</td>
                </th>
                <th>
                    <th>Equipment</th>
                    <td>{car.equipment}</td>
                </th>
                <th>
                    <th>Ccountry</th>
                    <td>{car.location.country}</td>
                </th>
                <th>
                    <th>ClassAuto</th>
                    <td>{car.location.classAuto}</td>
                </th>
                <th>
                    <th>Budget</th>
                    <td>{`${car.budget}$`}</td>
                </th>
                <th>
                    <th>Realese</th>
                    <td>{car.realese}</td>
                </th>
            </tbody>
            </table>
            <img alt="" src={require(`../img/Orders/${car.img}`)}></img>
            </div>
    )
}

export default function Orders(props){

    if(props.album.length === 0)
    {
        props.setCards(
            [{id: 1, brand : "Mercedes",model:"AMG SL 63 4MATIC+", cluthRewiew:'3.5',equipment :"Luxe", location:{country:'Germany',classAuto: 'J'},budget:"200000",realese:"2017",img:"1.png"},
            {id: 2, brand : "Mercedes",model:"Benz E-CLASS", cluthRewiew:'4',equipment :"Comfort", location:{country:'Germany',classAuto: 'E'},budget:"190000",realese:"2019",img:"2.png"},
            {id: 3, brand : "Mercedes",model:"AMG SL 43 4MATIC", cluthRewiew:'5',equipment :"Comfort", location:{country:'Germany',classAuto: 'E'},budget:"170000",realese:"2019",img:"3.png"},
            {id: 4, brand : "Mercedes",model:"AMG SL 53 4MATIC", cluthRewiew:'3',equipment :"Luxe", location:{country:'Germany',classAuto: 'J'},budget:"190000",realese:"2024",img:"4.png"},
        ]);
    }
    let Numbers = React.createRef();
    const sliderRef = useRef(null);
    function onChangeCounterPlus()
    {
        props.changeCounterPlus(this);
        sliderRef.current.swiper.slideNext();  
    }
    function onChangeCounterMinus()
    {
        props.onChangeCounterMinus(this);
        sliderRef.current.swiper.slidePrev();
    }
    props.album.map((item,index) =>
               console.log(item.id, props.album[index]));             
    return (
        <div className={s.Orders}>
            <div className={s.OrdersImgs}></div>
            <div className={s.OrdersContainer}>
                <div className={s.OrdersTitle}>
                    <NavLink to={'/'}>
                    <div className={s.OrdersTitleButton}>
                        <GoArrowLeft />
                        <p>Back to Home</p> 
                    </div>
                    </NavLink>
                    <div className={s.OrdersTitleBody}>

                        <div className={s.OrdersTitleBodyMenu}>
                            <p>Menu</p>
                            <p>We offers everything you need to make every journey your own.</p>
                        </div>
                        <div className={s.OrdersTitleBodyButton}>
                            <a href='#Album'>
                            <PiArrowDownLight className={s.OrdersTitleBodyButtonArrow}/>
                            </a>
                            <p>View</p>  
                        </div>
                    </div>
                </div> 
            </div>
            <div className={s.OrdersBody} id='Album'>
                    <div className={s.OrdersBodyTitle}>
                        <p>Information</p>
                        <Swiper ref={sliderRef}
                                slidesPerView={1}
                                spaceBetween={30}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                            {props.album.map((item,index) =>
                             
                            <SwiperSlide><Album key = {item.id} car={props.album[index]}/></SwiperSlide>
                            )}
                        </Swiper>
                       
                    </div>
                    <div className={s.OrdersBodyTitle__Title}>
                        <div ref={Numbers}>{`0${props.counterAlbum}/${props.album.at(-1).id}`}</div>
                    </div>
                    <div className={s.OrdersBodyButtons}>
                        <button onClick={onChangeCounterMinus.bind('-')}><GoArrowLeft /></button>
                        <button onClick={onChangeCounterPlus.bind('+')}><GoArrowRight /></button>
                    </div>
                </div>
        </div>
    )
}