import React, { useRef } from "react";
import s from "./Orders.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { PiArrowDownLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
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
        src={require(`../img/Orders/${car.img}`)}
        loading="lazy"
      ></img>
    </div>
  );
}

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.Numbers = React.createRef();
    this.SliderRef = React.createRef(null);

    axios
      .get("https://alexsandrzolotarev.github.io/api/encrypted.json")
      .then((response) => this.props.setCards(response.data.models));
  }
  onChangeCounterPlus() {
    this.props.changeCounterPlus(this);
    this.sliderRef.current.swiper.slideNext();
  }
  onSlideChange() {
    debugger;
    this.props.changeCounterAlbum(this.sliderRef.current.swiper.activeIndex);
  }
  onChangeCounterMinus() {
    this.props.onChangeCounterMinus(this);
    this.sliderRef.current.swiper.slidePrev();
  }
  render() {
    return (
      <div className={s.Orders}>
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
              <div className={s.OrdersTitleBodyMenu}>
                <p>Menu</p>
                <p>
                  We offers everything you need to make every journey your own.
                </p>
              </div>
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
            <p>Information</p>
            <Swiper
              ref={this.sliderRef}
              slidesPerView={1}
              onSlideChange={() => this.onSlideChange()}
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
              {this.props.album.map((item, index) => (
                <SwiperSlide>
                  {" "}
                  <Album key={item?.id} car={this.props.album[index]} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={s.OrdersBodyTitle__Title}>
            <div ref={this.Numbers}>{`0${this.props.counterAlbum}/${
              this.props.album.at(-1)?.id ? this.props.album.at(-1).id : 4
            }`}</div>
          </div>
          <div className={s.OrdersBodyButtons}>
            <button onClick={this.onChangeCounterMinus.bind("-")}>
              <GoArrowLeft />
            </button>
            <button onClick={this.onChangeCounterPlus.bind("+")}>
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
