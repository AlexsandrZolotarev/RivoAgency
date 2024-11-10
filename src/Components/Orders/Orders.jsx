import React, { useEffect, useRef } from "react";
import s from "./Orders.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { PiArrowDownLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
function Album({ car }) {
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
      <img
        alt=""
        src={require(`../../assets/Orders/ ${car.img}`)}
        loading="lazy"
      ></img>
    </div>
  );
}

let Orders = (props) =>
{
    let counterAlbum = props.album.at(-1)?.id ? props.album.at(-1).id : 4;
    return (
      <section className={s.Orders}>
        <div className={s.OrdersImgs}></div>
        <div className={s.OrdersContainer}>
          <div className={s.OrdersTitle}>
            <NavLink to={"/RivoAgancy"}>
              <div className={s.OrdersTitleButton}>
                <GoArrowLeft />
                <p>Back to Home</p>
              </div>
            </NavLink>
            <div className={s.OrdersTitleBody}>
              <header className={s.OrdersTitleBodyMenu}>
                <p>Menu</p>
                <p>
                  We offers everything you need to make every journey your own.
                </p>
              </header>
              <div className={s.OrdersTitleBodyButton}>
                <a href="#Album">
                  <PiArrowDownLight className={s.OrdersTitleBodyButtonArrow} />
                </a>
                <p>View</p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.OrdersBody} id="Album">
          <div className={s.OrdersBodyTitle}>
            <header><h2>Information</h2></header>
            <Swiper
              ref={props.sliderRef}
              slidesPerView={1}
              onSlideChange={() => props.onSlideChange()}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper"
            >
              {props.album.map((item, index) => (
                <SwiperSlide>
                  {" "}
                  <Album key={item?.id} car={props.album[index]} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.OrdersBodyTitle__Title}>
            <div ref={props.Numbers}>
            {(props.counterAlbum <= 9) ? "0" + `${props.counterAlbum}/${counterAlbum}` :
            `${props.counterAlbum}/${counterAlbum}`
            }
            
            </div>
          </div> 
          <div className={s.OrdersBodyButtons}>
            <button onClick={props.onChangeCounterMinus.bind("-")}>
              <GoArrowLeft />
            </button>
            <button onClick={props.onChangeCounterPlus.bind("+")}>
              <GoArrowRight />
            </button>
          </div>
        </div>
      </section>
    );
  
}

export default Orders;
