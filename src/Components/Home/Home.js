import React from "react";
import s from "./Home.module.css";
import ElementLeft from "./../../assets/HomePage/WeWhoWeAre/ElementLeft.svg";
import ElementLeft2 from "./../../assets/HomePage/WeWhoWeAre/ElementLeftBig.svg";
import ElementRight from "./../../assets/HomePage/WeWhoWeAre/ElementRight.svg";
import Vector from "./../../assets/HomePage/WeWhoWeAre/Vector.svg";
import Cloch from "./../../assets/HomePage/WeWhoWeAre/Cloch.svg";
import ClochLights from "./../../assets/HomePage/WeWhoWeAre/ClochLight.svg";
import Cube from "./../../assets/HomePage/WeWhoWeAre/Cube.svg";
import Poster from "./../../assets/HomePage/VideoPoster.webp";
import videoWebm from ".//../../video/whoWeAreVideo.webm";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import IndustryExpertise from "../IndustryExpertise/IndustryExpertise";
import Stack from "../Stack/Stack";

let Home = (props) => {
  let video = React.createRef();
  let buttonPlay = React.createRef();
  function onVolumeChange(volume)
  {
    props.updateVolume({video: video, volume: volume});
  }
  function onPlayChange(){
    props.onChangeButtonPlay({buttonPlay: buttonPlay, video: video});
  }
  return (
    <section className={s.Home}>
      <section className={s.HomeCointaner}>
        <div className={s.HomeImgs}></div>
        <div className={s.HomeTitleWithCube}>
          <div className={s.HomeTitle} id="HomeTitle">
            <h2>We are rivo agency</h2>
            <h2>We help</h2>
            <h2>Ideas</h2>
            <h2>To Change</h2>
            <h2>The world</h2>
          </div>
          <div className={s.HomeTitleCube}>
            <img alt="" aria-hidden="true" src={Cube}></img>
          </div>
        </div>
      </section>
      <article className={s.WeWhoWeAreContainer} id="WeWhoWeAre">
        <article className={s.WeWhoWeAreContainerLeft}>
          <img src={ElementLeft} aria-hidden="true" loading="lazy"></img>
          <img src={ElementLeft2} aria-hidden="true" loading="lazy"></img>
        </article>

        <section className={s.WeWhoWeAreContainerMain}>
          <header className={s.WeWhoWeAreContainerMain__title}>
            <h2>Who we are?</h2>
            <h2>Who we are?</h2>
          </header>
          <div className={s.WeWhoWeAreContainerMain__body}>
            <div className={s.WeWhoWeAreContainerMain__textWithVideo}>
              <header><h2>Hi! We are a team of professionals</h2></header>
              <p>
                With proven expertise in delivering effective, secured and
                high-quality digital solutions for various industries and
                digital marketing.
              </p>
              <div
                className={s.WeWhoWeAreContainerMain_VideoContainar}
                onClick={onPlayChange}
              >
                <video
                  ref={video}
                  poster={Poster}
                  preload="metadata"
                  id="VideoGofman"
                >
                  <source src={video} type="video/mp4"></source>
                  <source src={videoWebm} type="video/webm"></source>
                </video>
                <span ref={buttonPlay} className={s.videoEnter}></span>
              </div>
              <input
                type="range"
                className={s.inputVolume}
                min="0"
                max="10"
                value={props.volume}
                onChange={onVolumeChange.bind(this)}
                id="myNumber"
              ></input>
            </div>
            <div className={s.WeWhoWeAreContainerMain__textWithClutch}>
              <div className={s.WeWhoWeAreContainerMain__textWithClutch_body}>
                <header><h2>Our company</h2></header>
                <p>
                  Offers development of different products starting from simple
                  promo websites for individuals or companies, and finishing
                  with complicated solutions for multiple purposes, e.g.
                </p>
                <p>
                  CRM and ERP systems, scalable web platforms, mobile
                  applications, Internet-of-Things, etc. We apply our expertise
                  and knowledge to take your product from concept to prototype
                  and to production.
                </p>
              </div>
              <div className={s.WeWhoWeAreContainerMain__Clutch}>
                <img alt="#" src={(window.matchMedia('(prefers-color-scheme: dark)').matches) ? Cloch: ClochLights } aria-hidden="true"></img>
              </div>
              <img
                alt="#"
                src={Cube}
                className={s.cube}
                aria-hidden="true"
                loading="lazy"
              ></img>
            </div>
          </div>
        </section>

        <article className={s.WeWhoWeAreContainerRight}>
          <img alt="#" src={ElementRight} loading="lazy"></img>
          <img alt="#" src={Vector} loading="lazy"></img>
        </article>
      </article>
      <Services/>
      <IndustryExpertise/>
      <Stack/>
      <Projects/>
      <Contacts/>
     
    </section>
    
  );
}
export default Home;