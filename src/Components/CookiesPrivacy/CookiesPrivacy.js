import React from 'react'
import s from'./CookiesPrivacy.module.css'

export default function CookiesPrivacy(props) {

  function Button(CP)
  {
    return (
      <button onClick={hideCookies} >ACCEPT</button>
    );
  }

  function hideCookies()
  {
    document.getElementById('CookiesPrivacy').style.display = 'none';
  }
   return (
    
      <div className={s.CookiesPrivacy} id='CookiesPrivacy'>
      <div className={s.CookiesPrivacy_body}>
          <p className={s.CookiesPrivacy_body__title}>Cookies & Privacy</p>
          <p className={s.CookiesPrivacy_body__description}>
              This website uses cookies to ensure you get the best experience on our website.
          </p>
      </div>
      <div className={s.CookiesPrivacy_body__informationBody}>
          <p>More information</p>
          <Button/>
      </div>
  </div>
  )
}
