
import React from 'react'
import  s from './Careers.module.css'
function AddNewVacancies({props})
{
  let positionJob = React.createRef();
  let name = React.createRef();
  let salary = React.createRef();
  let region = React.createRef();
  
  const onVacancichange = (input) => { 
    props.updateNewVacanciText(input);
    props.liftText(input);
  }

  let addNewVacanci = () => {
    props.addVacanci();
  }
  return (
      <div className={s.VacanciesForm}>
          <div>
            <label>Position job</label> 
            <input tabIndex="0" ref={positionJob} onChange={onVacancichange.bind(this)} type='text' id='positionJob' name='positionJob' value={props.newCareerVacanci.positionJob}>
            </input>
          
          </div>
          <div>   
           <label>Name</label>
            <input ref={name} onChange={onVacancichange.bind(this)} type='text' id='name' name='name' value={props.newCareerVacanci.name}></input>
          </div>
          <div>
            <label>Salary</label>
            <input ref={salary} onChange={onVacancichange.bind(this)} type='text' id='salary' name='salary' value={props.newCareerVacanci.salary}></input>
         
          </div> 
          <div> 
          <label >Region</label>
            <input ref={region} onChange={onVacancichange.bind(this)}  type='text' id='region' name='region' value={props.newCareerVacanci.region}></input>
           
          </div>
          <div className={s.addNewVacanciBody}>
            <button className={s.addNewVacanciButton} onClick={addNewVacanci}>Add new</button>
          </div>
         
      </div>
  )
}


function Vacanci({v})
{
  return (
    <li >
      <ul>
        <li>{v.positionJob}</li>
        <li>{v.name}</li>
        <li>Salary: $ {v.salary}</li>
        <li>{v.region}</li>
        <button>View Details</button>
      </ul>
    </li>
  )
}


export default function Careers(props) {
  return (
    <div className={s.Career}>
      <div className={s.Wrapper_Career}>
        <div className={s.Wrapper_Career__Title}>
            <div className={s.Wrapper_Career__Title_name}>
                <p>Career</p>
                <p>Career</p>
            </div>
            <div className={s.Wrapper_Career__Title_title}>
                <p>Interested in joining our team?</p>
                <p>As we are continuously growing, we require new talents to join our professional team. Please provide us with your information and portfolio and we will contact you shortly.</p>
            </div>
        </div>
        <div className={s.Wrapper_Career__Vacancies}>
          <div className={s.Wrapper_Career__Vacancies_title}>
              <p>Current vacancies</p>
          </div>
          <div className={s.Wrapper_Career__Vacancies_vacancies}>
              <ul className={s.vacancies}>{props.careerVacancies.map((v) => <Vacanci  key = {v.id} v ={v}/>)}</ul>
              <AddNewVacancies props = {props}/>
          </div>
        </div>
      </div>
    </div>
  )
}


