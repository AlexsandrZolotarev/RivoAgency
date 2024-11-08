import React from "react";
import s from "./Home.module.css";
import cube from ".//../img/ElementCube.webp";
import { PiArrowDownLight } from "react-icons/pi";
import ElementLeft from ".//../img/HomePage/WeWhoWeAre/ElementLeft.webp";
import ElementLeft2 from ".//../img/HomePage/WeWhoWeAre/ElementLeft2.webp";
import ElementRight from ".//../img/HomePage/WeWhoWeAre/ElementRight.webp";
import Vector from ".//../img/HomePage/WeWhoWeAre/Vector3Right.webp";
import Cloch from ".//../img/HomePage/WeWhoWeAre/Cloch_icon.webp";
import Cube from ".//../img/HomePage/WeWhoWeAre/Center.webp";
import Poster from ".//../img/HomePage/VideoPoster.webp";
import videoWebm from ".//../video/whoWeAreVideo.webm";

class Orders extends React.Component {
  constructor(props)
  {
    super(props);
    this.video = React.createRef();
    this.buttonPlay = React.createRef();
 
  }
  onVolumeChange = (volume) => {
    debugger;
    this.props.updateVolume({video: this.video, volume: volume});
  }
  onPlayChange = () =>{
    this.props.buttonPlayChange({buttonPlay: this.buttonPlay, video: this.video});
  }
  render()
  {
    return (
      <div className={s.Home}>
        <div className={s.HomeCointaner}>
          <div className={s.HomeImgs}></div>
          <div className={s.HomeTitleWithCube}>
            <div className={s.HomeTitle}>
              <p>We are rivo agency</p>
              <p>We help</p>
              <p>Ideas</p>
              <p>To Change</p>
              <p>The world</p>
            </div>
            <div className={s.HomeTitleCube}>
              <img alt="" aria-hidden="true" src={cube}></img>
            </div>
          </div>
          <div className={s.HomeButton}>
            <a href="#WeWhoWeAre">
              <PiArrowDownLight />
            </a>
          </div>
        </div>
        <div className={s.WeWhoWeAreContainer} id="WeWhoWeAre">
          <div className={s.WeWhoWeAreContainerLeft}>
            <img src={ElementLeft} aria-hidden="true" loading="lazy"></img>
            <img src={ElementLeft2} aria-hidden="true" loading="lazy"></img>
          </div>
  
          <div className={s.WeWhoWeAreContainerMain}>
            <div className={s.WeWhoWeAreContainerMain__title}>
              <p>Who we are?</p>
              <p>Who we are?</p>
            </div>
            <div className={s.WeWhoWeAreContainerMain__body}>
              <div className={s.WeWhoWeAreContainerMain__textWithVideo}>
                <p>Hi! We are a team of professionals</p>
                <p>
                  With proven expertise in delivering effective, secured and
                  high-quality digital solutions for various industries and
                  digital marketing.
                </p>
                <div
                  className={s.WeWhoWeAreContainerMain_VideoContainar}
                  onClick={this.onPlayChange}
                >
                  <video
                    ref={this.video}
                    poster={Poster}
                    preload="metadata"
                    id="VideoGofman"
                  >
                    <source src={this.video} type="video/mp4"></source>
                    <source src={videoWebm} type="video/webm"></source>
                  </video>
                  <span ref={this.buttonPlay} className={s.videoEnter}></span>
                </div>
                <input
                  type="range"
                  className={s.inputVolume}
                  min="0"
                  max="10"
                  value={this.props.volume}
                  onChange={this.onVolumeChange.bind(this)}
                  id="myNumber"
                ></input>
              </div>
              <div className={s.WeWhoWeAreContainerMain__textWithClutch}>
                <div className={s.WeWhoWeAreContainerMain__textWithClutch_body}>
                  <p>Our company</p>
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
                  <img src={Cloch} aria-hidden="true" loading="lazy"></img>
                </div>
                <img
                  src={Cube}
                  className={s.cube}
                  aria-hidden="true"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
  
          <div className={s.WeWhoWeAreContainerRight}>
            <img src={ElementRight} loading="lazy"></img>
            <img src={Vector} loading="lazy"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Orders;
