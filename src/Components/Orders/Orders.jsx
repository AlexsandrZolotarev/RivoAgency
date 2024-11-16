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
        <thead>
          <tr>
            <th>{car.model}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brand</td>
            <td>{car.brand}</td>
          </tr>
          <tr>
            <td>Cluth Rewiew</td>
            <td>{car.cluthRewiew}</td>
          </tr>
          <tr>
            <td>Equipment</td>
            <td>{car.equipment}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{car.location.country}</td>
          </tr>
          <tr>
            <td>ClassAuto</td>
            <td>{car.location.classAuto}</td>
          </tr>
          <tr>
            <td>Budget</td>
            <td>{`${car.budget}$`}</td>
          </tr>
          <tr>
            <td>Realese</td>
            <td>{car.realese}</td>
          </tr>
        </tbody>
      </table>
      <img
        alt=""
        src={require(`../../assets/Orders/${car.img}`)}
        loading="lazy"
      ></img>
    </div>
  );
}

let Orders = (props) => {
  let counterAlbum = props.album.at(-1)?.id ? props.album.at(-1).id : 4;
  return (
    <section className={s.Orders}>
      <div className={s.OrdersImgs}></div>
      <div className={s.OrdersContainer}>
        <div className={s.OrdersTitle}>
          <NavLink to={"/"}>
            <div className={s.OrdersTitleButton}>
              <GoArrowLeft />
              <p>Back to Home</p>
            </div>
          </NavLink>
          <div className={s.OrdersTitleBody}>
            <header className={s.OrdersTitleBodyMenu}>
              <p>Menu</p>
              <p>
                We offers everytding you need to make every journey your own.
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
      <article className={s.OrdersBody} id="Album">
        <div className={s.OrdersBodyTitle}>
          <header>
            <h2>Information</h2>
          </header>
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
          <div className={s.OrdersBodyButtons}>
                  <button>
                    <GoArrowLeft
                      onClick={() => props.onChangeCounterMinus()}
                    />
                  </button>
                  <button>
                    <GoArrowRight
                      onClick={() => props.onChangeCounterPlus()}
                    />
                  </button>
                </div>
        </div>
        <div className={s.OrdersBodyTitle__Title}>
          <div>
            {props.counterAlbum <= 9
              ? "0" + `${props.counterAlbum}/${counterAlbum}`
              : `${props.counterAlbum}/${counterAlbum}`}
          </div>
        </div>
        
      </article>
    </section>
  );
};

export default Orders;
