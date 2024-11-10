import React from "react";
import s from "./CookiesPrivacy.module.css";

class CookiesPrivacy extends React.Component {
    Button = () => {
      return <button onClick={this.hideCookies}>ACCEPT</button>;
    }
    componentDidMount = () =>{
      setTimeout(() => {
        document.getElementById("CookiesPrivacy").style= `
        visibility:visible;
        transform: translateY(0%);`
        document.getElementById("ContactUs").style.bottom = '10%';
        let scrollWidth = Math.max(
          document.body.scrollWidth, document.documentElement.scrollWidth,
          document.body.offsetWidth, document.documentElement.offsetWidth,
          document.body.clientWidth, document.documentElement.clientWidth
        );
        if(scrollWidth < 970) document.getElementById("ContactUs").style.bottom = '20%';

      },6000);
    };
    hideCookies = () => {
      document.getElementById("ContactUs").style.bottom = '1%';
      document.getElementById("CookiesPrivacy").style.display = "none";
    };

  render() {
    return (
      <div className={s.CookiesPrivacy} id="CookiesPrivacy">
        <div className={s.CookiesPrivacy_body}>
          <p className={s.CookiesPrivacy_body__title}>Cookies & Privacy</p>
          <p className={s.CookiesPrivacy_body__description}>
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
        </div>
        <div className={s.CookiesPrivacy_body__informationBody}>
          <p>More information</p>
          <this.Button/>
        </div>
      </div>
    );
  }
}
export default CookiesPrivacy;
