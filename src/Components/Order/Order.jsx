import React from "react";
import s from "./Order.module.css";
import NotFound from "../NotFound/NotFound";
// import background from "../../assets/Orders/Order/vehicle_background.webp";
import backgroundBlack from "../../assets/Orders/Order/BackgroundOrderBlack.png";
import { PiEngineFill } from "react-icons/pi";
import { FaChargingStation, FaGasPump } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import Scroll from "../../Scroll";
let Order = (props) => {
  if (!props.order) {
    return <NotFound />;
  }
  Scroll();
  return (
    <section className={s.order}>
      <header className={s.order__header}>
        <a href="/#Orders">
          <h2>Venicles</h2>
        </a>
      </header>
      <div className={s.background}>
        <picture>
          <source srcSet={backgroundBlack} media="(min-width: 1024px)" />
          <img src={backgroundBlack} alt="Background" width="2962" height="1297" />
        </picture>
      </div>
      <div className={s.order__container}>
        <div className={s.presentaion}>
          <div className={s.img__body}>
            <img
              src={`https://raw.githubusercontent.com/AlexsandrZolotarev/RivoAgency/refs/heads/dev/src/assets/Orders/Cars/${props.order.img}`}
              alt={`Модель ${props.order.model}`}
              loading="lazy"
            />
          </div>
          <div className={s.text}>
            <IoAlertCircleOutline />
            <p>
              All images are only examples of vehicles of the same brand and the
              same model are proposed as an illustration, these are not images
              of the vehicle for sale and have no contractual value. The ordered
              vehicle may be different from the picture. The presented vehicle
              is available at the date of consultation with the distributor
              identified. The application offers custom from the distributor
              does not constitute a reservation and does not guarantee the
              availability of this vehicle as it has not been the subject of a
              command.
            </p>
          </div>
        </div>

        <article className={s.descriprion}>
          <div className={s.descriprion__container}>
            <header>
              <h2>{props.order.model}</h2>
            </header>
            <div className={s.prices}>
              <div className={s.prices__price}>{props.order.price + ` €`}</div>
              <div className={s.prices__monthlyrent}>
                {" "}
                {props.order.monthlyRent + ` €`}
              </div>
            </div>
            <div className={s.types}>
              <div className={s.types__engine}>
                <PiEngineFill />
                {props.order.engine}
              </div>
              <div className={s.types__fuel}>
                {props.order.Fuel === "Gasoline" ||
                props.order.Fuel === "Diesel" ? (
                  <FaGasPump />
                ) : (
                  <FaChargingStation />
                )}
                {props.order.Fuel}
              </div>
              <div className={s.types__transmission}>
                <TbAutomaticGearbox />
                {props.order.transmission}
              </div>
            </div>
            <div className={s.consumption}>
              <div>
                <p>
                  {!props.order.fuelConsumption
                    ? `Power consumption in combined cycle:`
                    : `Fuel consumption (combined cycle):`}{" "}
                </p>
                <p>
                  {!props.order.fuelConsumption
                    ? props.order.PowerConsumption
                    : props.order.fuelConsumption}
                </p>
              </div>
              <div>
                <p>
                  {!props.order.fuelConsumption
                    ? `Power consumption in combined cycle:`
                    : `Fuel consumption (combined cycle):`}{" "}
                </p>
                <p>
                  {!props.order.fuelConsumption
                    ? props.order.PowerConsumption
                    : props.order.fuelConsumption}
                </p>
              </div>
            </div>
            <div className={s.consumption__CO2}>
              <p>Emissions of CO₂ (combined cycle):</p>
              <p>{props.order.emissionsOfCO}</p>
            </div>
            <a
              href=" "
              title={`Узнать больше о ${props.order.model}`}
              className={s.button}
            >
              <button>Buy</button>
              <MdArrowOutward />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Order;
