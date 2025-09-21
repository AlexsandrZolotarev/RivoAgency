import React, { useEffect, useState } from "react";
import s from "./Orders.module.css";
import { NavLink } from "react-router-dom";
import { PiEngineFill } from "react-icons/pi";
import { FaCalculator, FaGasPump } from "react-icons/fa6";
import { FaChargingStation, FaSearch } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
let Car = ({ car }) => {
  return (
    <article className={s.car} tabIndex={1}>
      <NavLink to={"Order/" + car.id} className={s.car__image}>
        <img
          src={`https://github.com/AlexsandrZolotarev/RivoAgency/blob/main/src/assets/Orders/Cars/${car.img}`}
          alt={`Модель ${car.model}`}
          loading="lazy"
        />
      </NavLink>
      <header>
        <h2>{car.model}</h2>
      </header>
      <div className={s.types}>
        <div className={s.types__container}>
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
      </div>
      <div className={s.prices}>
        <div className={s.prices__price}>{car.price + ` €`}</div>
        <div className={s.prices__monthlyrent}> {car.monthlyRent + ` €`}</div>
      </div>

      <div className={s.description}>
        {car.Equipment.map((item) => (
          <div key={item} className={s.description__item}>
            <IoMdCheckmark />
            {item}
          </div>
        ))}
      </div>
      <div className={s.consumption__body}>
        <div className={s.consumption}>
          <div>
            <p>
              {(!car.fuelConsumption)
                ? `Power consumption in combined cycle`
                : `Fuel consumption (combined cycle)`}{" "}
            </p>
            <span>
              <mark>
                {(!car.fuelConsumption)
                  ? car.PowerConsumption
                  : car.fuelConsumption}
              </mark>
            </span>
          </div>
          <div>
            <p>
              {!car.fuelConsumption
                ? `Power consumption in combined cycle`
                : `Fuel consumption (combined cycle)`}{" "}
            </p>
            <span>
              <mark>
                {" "}
                {!car.fuelConsumption
                  ? car.PowerConsumption
                  : car.fuelConsumption}
              </mark>
            </span>
          </div>
        </div>
        <div className={s.consumption__CO2}>
          <p>Emissions of CO₂ (combined cycle)</p>
          <span>
            <mark>{car.emissionsOfCO}</mark>
          </span>
        </div>
      </div>

      <div className={s.category}>
        <img
          src={require(`../../assets/Orders/Category/${car.category}`)}
          alt={`Категория модели`}
        />
      </div>
      <NavLink
        to={"Order/" + car.id}
        title={`Узнать больше о ${car.model}`}
        className={s.button}
      >
        <button>Learn more</button>
      </NavLink>
    </article>
  );
};
let Orders = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  useEffect(() => {
    props.getCarsThunk();
  }, [props.currentPage]);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  function editCurrentPage(page) {
    props.setCurrentPage(+page.target.innerText);
  }

  function getCarsOutInputSearch(input) {
    props.setCardsForSearchingThunk(input.target.value);
    props.getCardsInSearching(input.target.value);
  }
  return (
    <section className={s.Orders}>
      <div className={s.Orders__container}>
        <div className={s.Orders__title}>
          <div className={s.Orders__title__container}>
            <div className={s.title}>
              <h1>Looking for a new vehicle in stock.</h1>
            </div>
            <div className={s.title__list}>
              <ul>
                <li>
                  <IoMdCheckmark />
                  <p>Check out our range</p>
                </li>
                <li>
                  <IoMdCheckmark />
                  <p>Filter to search</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.Orders__body}>
          <div className={s.Orders__cards}>
            <div className={s.Orders__cards__searching}>
              <div className={s.all_venicles}>
                <p>{props.totalUserCount + " results"}</p>
              </div>
              <div className={s.searching}>
                <input onChange={getCarsOutInputSearch.bind(this)} />
                <FaSearch />
              </div>
            </div>
            <div className={s.orders__body__grid} id="ordersBody">
              {props.orders.map((item) => (
                <Car key={item.id} car={item} />
              ))}
            </div>

            <div className={s.counterPages__body}>
              {pages.map((page) => {
                return (
                  <span
                    tabIndex={1}
                    onKeyDown={editCurrentPage.bind(page)}
                    className={props.currentPage === page && s.selectedPage}
                    onClick={editCurrentPage.bind(page)}
                  >
                    {page}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
