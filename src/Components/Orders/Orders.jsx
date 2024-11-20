import React from "react";
import s from "./Orders.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { PiArrowDownLight } from "react-icons/pi";
import { PiEngineFill } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa6";
import { FaChargingStation } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
let Description = () => {
  return <div>1</div>;
};

let Order = ({ car }) => {
  return (
    <article className={s.car} tabIndex={car.id}>
      <a href="" className={s.car__image}>
        <img
          src={require(`../../assets/Orders/Cars/${car.img}`)}
          alt={`Модель ${car.model}`}
          loading="lazy"
        />
      </a>
      <header>
        <h2>{car.model}</h2>
      </header>
      <div className={s.types}>
        <div className={s.types__engine}>
          <PiEngineFill />
          {car.engine}
        </div>
        <div className={s.types__fuel}>
          {car.Fuel === "Gasoline" || car.Fuel === "Diesel" ? (
            <FaGasPump />
          ) : (
            <FaChargingStation />
          )}
          {car.Fuel}
        </div>
        <div className={s.types__transmission}>
          <TbAutomaticGearbox />
          {car.transmission}
        </div>
      </div>
      <div className={s.prices}>
        <div className={s.prices__price}>{car.price + ` €`}</div>
        <div className={s.prices__monthlyrent}> {car.monthlyRent + ` €`}</div>
      </div>

      <div className={s.description}>
        {car.Equipment.map((item) => (
          <div className={s.description__item}>
            <IoMdCheckmark />
            {item}
          </div>
        ))}
      </div>
      <div className={s.consumption}>
        <div>
          <p>
            {!car.fuelConsumption
              ? `Power consumption in combined cycle`
              : `Fuel consumption (combined cycle)`}{" "}
          </p>
          <p>
            {!car.fuelConsumption ? car.PowerConsumption : car.fuelConsumption}
          </p>
        </div>
        <div>
          <p>
            {!car.fuelConsumption
              ? `Power consumption in combined cycle`
              : `Fuel consumption (combined cycle)`}{" "}
          </p>
          <p>
            {!car.fuelConsumption ? car.PowerConsumption : car.fuelConsumption}
          </p>
        </div>
      </div>
      <div className={s.consumption__CO2}>
        <p>Emissions of CO₂ (combined cycle)</p>
        <p>{car.emissionsOfCO}</p>
      </div>
      <div className={s.category}>
        <img
          src={require(`../../assets/Orders/Category/${car.category}`)}
          alt={`Категория модели`}
        />
      </div>
      <a href=" " title={`Узнать больше о ${car.model}`} className={s.button}>
        <button>Learn more</button>
      </a>
    </article>
  );
};
let Orders = (props) => {
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
              <p>Looking for a new vehicle in stock</p>
            </header>
            <div className={s.OrdersTitleBodyButton}>
              <a>
                <PiArrowDownLight className={s.OrdersTitleBodyButtonArrow} />
              </a>
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
      <section className={s.OrdersBody}>
        <div className={s.OrdersBodyTitle}>
          <header>
            <h2>Information</h2>
          </header>
        </div>
        <div className={s.orders__body__grid}>
          {props.orders.map((item) => (
            <Order key={item.id} car={item} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Orders;
