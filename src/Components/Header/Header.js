import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { NavLink } from "react-router-dom";
import logoDark from "./../../assets/Header/LogotypeDark.svg";
import logoLight from "./../../assets/Header/LogotypeLight.svg";
import s from "./Header.module.css";
import HeaderMenu from "./Menu";
let Header = (props) => {
  return (
    <header className={s.header} id="header">
      <div className={s.container}>
        <div className={s.header__body}>
          <NavLink to={"/RivoAgancy"} aria-label="Home Page">
          <img alt="logotype" src={(window.matchMedia('(prefers-color-scheme: dark)').matches) ? logoDark : logoLight}/>
          </NavLink>
          <div className={s.header__buttons_items}>
            <div className={s.header__items}>
              <ul className={s.header__items_items}>
                <li>
                  <NavLink to={"/Services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/Projects"}>Projects</NavLink>
                </li>
                <li>
                  <nav className={s.Expertise}>
                    Expertise
                    <ul>
                      <ul id={s.submenu}>
                        <li>
                          <NavLink to={"/Healthcare&Fitness"}>
                            Healthcare & Fitness
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Retail&Ecommerce"}>
                            Retail & Ecommerce
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Real&Estate"}>Real & Estate</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Custom&CRM"}>Custom & CRM</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Education&E-Learning"}>
                            Education & E-Learning
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Food&Restaurant"}>
                            Food & Restaurant
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Retail&E-Commerce"}>
                            Retail & E-Commerce
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/Logistic&Distribution"}>
                            Logistic & Distribution
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                    <GoChevronDown className="Expertise_GoChevronDown" />
                  </nav>
                </li>
                <li>
                  <NavLink to={"/Contacts"}>Contacts</NavLink>
                </li>
                <li>
                  <NavLink to={"/Careers"} className={s.Hot}>
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink className={s.makeOrder_Button} to={"/Orders"}>
              <p>MAKE ORDER</p>
              <MdArrowOutward className={s.makeOrder_Button__arrow} />
            </NavLink>
            <div className={s.headerMainMenu}>
              {/* <input
                type="checkbox"
                className={s.close}
              ></input>
              <nav className={s.headerMainMenu__menu} id="hamburger">
                <ul className={s.headerMainMenu__list}>
                  <svg
                    width="134"
                    height="51"
                    viewBox="0 0 134 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.hamburger__logotype}
                  >
                    <title>Logotype</title>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M109.494 45.6085L108.263 47.9736L107.033 45.6085H106.19L107.883 48.6433V50.5884H108.624V48.5383H108.699L110.336 45.6057L109.494 45.6085ZM93.522 49.262C93.3608 49.4857 93.147 49.6664 92.8994 49.7882C92.6518 49.91 92.3782 49.969 92.1025 49.9602C91.6165 49.9447 91.1557 49.741 90.8175 49.3918C90.4791 49.0428 90.29 48.576 90.29 48.09C90.29 47.604 90.4791 47.1371 90.8175 46.788C91.1557 46.439 91.6165 46.2351 92.1025 46.2197C92.4033 46.2091 92.7015 46.2796 92.9655 46.424C93.1874 46.5458 93.3781 46.7171 93.523 46.9244L94.1694 46.5546C93.9378 46.2248 93.6291 45.9565 93.2702 45.773C92.9113 45.5896 92.513 45.4964 92.11 45.5017C91.767 45.4927 91.4259 45.5536 91.1073 45.6808C90.7887 45.808 90.4994 45.9987 90.257 46.2414C90.0147 46.484 89.8243 46.7735 89.6974 47.0921C89.5707 47.4107 89.5103 47.7519 89.5197 48.0946C89.5122 48.4369 89.5741 48.777 89.7018 49.0946C89.8295 49.4122 90.0202 49.7007 90.2624 49.9426C90.5047 50.1845 90.7934 50.3747 91.1114 50.502C91.4292 50.6293 91.7695 50.6908 92.1119 50.683C92.5159 50.6901 92.9155 50.598 93.2757 50.415C93.6359 50.2318 93.9456 49.9633 94.1779 49.6329L93.522 49.262ZM76.3146 45.6066V49.1306L73.8455 45.6066H73.272V50.5978H74.014V47.0616L76.485 50.5978H77.0585V45.6066H76.3146ZM58.2944 49.8826V48.422H60.2818V47.7267H58.2944V46.3172H60.471V45.6066H57.5373V50.5978H60.5089V49.8874L58.2944 49.8826ZM42.641 48.0436V48.6803H44.3009L44.2442 48.8638C44.0265 49.5639 43.416 49.9659 42.5699 49.9659C41.4343 49.9659 40.6337 49.2015 40.6337 48.107C40.6248 47.8589 40.6671 47.6117 40.7575 47.3805C40.848 47.1493 40.9849 46.9391 41.1597 46.7628C41.3346 46.5865 41.5437 46.4479 41.7742 46.3554C42.0046 46.263 42.2516 46.2188 42.4999 46.2253C42.7788 46.2156 43.056 46.2724 43.3085 46.3911C43.561 46.51 43.7815 46.6873 43.9517 46.9084L44.5943 46.5376C44.3685 46.2286 44.0757 45.9747 43.7378 45.7949C43.3559 45.5902 42.9274 45.4882 42.4943 45.4988H42.4479C42.102 45.4983 41.7594 45.5666 41.4403 45.6999C41.1212 45.8334 40.8319 46.029 40.5893 46.2755C40.3468 46.522 40.1558 46.8143 40.0277 47.1354C39.8995 47.4566 39.8368 47.8001 39.8432 48.1458C39.8494 48.4914 39.9246 48.8324 40.0644 49.1487C40.2041 49.4649 40.4056 49.7502 40.657 49.9877C40.9083 50.2252 41.2046 50.4102 41.5283 50.5319C41.8521 50.6535 42.1969 50.7094 42.5425 50.6962C44.0094 50.6962 44.9909 49.7369 44.9909 48.3094V48.0436H42.641ZM26.2323 45.6066H25.1515L23.4102 50.5978H24.2288L24.5439 49.6518H26.8455L27.1607 50.5978H27.9831L26.2323 45.6066ZM24.7796 48.9574L25.7004 46.214L26.6175 48.9574H24.7796Z"
                      fill="#FDDD0A"
                    />
                    <path
                      d="M42.1426 0.0323052V36.1063H51.178V-0.00195312L42.1426 0.0323052Z"
                      fill="#FDDD0A"
                    />
                    <path
                      d="M98.3329 -0.00195312H87.7979L77.2617 21.3005L66.7307 -0.00195312H56.1895L73.8667 36.1063H80.6567L98.3329 -0.00195312Z"
                      fill="#FDDD0A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M115.153 -0.00132951C110.937 0.0192679 106.861 1.50065 103.616 4.19023C100.371 6.87982 98.1605 10.611 97.3604 14.7477C96.5603 18.8844 97.2206 23.1705 99.2284 26.8751C101.236 30.5797 104.468 33.4732 108.371 35.0628C112.275 36.6522 116.609 36.8389 120.635 35.5912C124.661 34.3434 128.129 31.7384 130.448 28.2203C132.768 24.7022 133.795 20.489 133.354 16.2987C132.913 12.1085 131.032 8.20097 128.03 5.24228C126.337 3.56109 124.327 2.23209 122.116 1.33206C119.907 0.432037 117.54 -0.0211577 115.153 -0.00132951ZM115.153 27.0752C112.771 27.0738 110.489 26.1273 108.806 24.4439C107.124 22.7603 106.179 20.4777 106.179 18.098C106.18 15.7182 107.126 13.4361 108.81 11.7536C110.494 10.0711 112.777 9.12593 115.158 9.12593C117.539 9.12593 119.821 10.0711 121.506 11.7536C123.189 13.4361 124.135 15.7182 124.136 18.098C124.137 20.4777 123.192 22.7603 121.509 24.4439C119.826 26.1273 117.544 27.0738 115.163 27.0752H115.153Z"
                      fill="#FDDD0A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.1186 13.0369C36.1186 18.7467 32.3278 23.603 27.051 25.3669L32.4472 36.1063H21.9516L12.3512 17.0494H12.3782L12.3273 16.9456H23.4711C25.7008 16.9456 27.509 15.1942 27.509 13.0338C27.509 10.8735 25.7008 9.12218 23.4711 9.12218H7.50218L3.00938 -0.00195312H22.664C30.0949 -0.00195312 36.1186 5.8365 36.1186 13.0369ZM5.01276 26.077C3.85227 26.0777 2.72797 26.4807 1.83139 27.2172C0.934809 27.9538 0.321434 28.9782 0.0957655 30.116C-0.129903 31.2539 0.0460962 32.4348 0.593777 33.4576C1.14146 34.4802 2.02694 35.2815 3.09935 35.7248C4.17176 36.168 5.36476 36.2259 6.47509 35.8885C7.58541 35.5512 8.54437 34.8395 9.18858 33.8746C9.83279 32.9097 10.1224 31.7514 10.0081 30.597C9.89371 29.4427 9.3825 28.3636 8.56151 27.5438C8.09563 27.078 7.54235 26.7086 6.93339 26.4569C6.32442 26.2051 5.67174 26.076 5.01276 26.077Z"
                      fill="#FDDD0A"
                    />
                  </svg>
                  <li>
                    <NavLink to={"/RivoAgancy"}>HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Services"}>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Projects"}>Projeсts</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Contacts"}>Contaсts</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Careers"}>Careers</NavLink>
                  </li>
                </ul>
              </nav> */}
              <HeaderMenu/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
