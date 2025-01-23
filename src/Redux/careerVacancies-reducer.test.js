import careerVacanciesReducer, { addVacanci} from "./careerVacancies-reducer";

let state = {
  vacancies: [{
      id: 1,
      name: "React Developer",
      salary: "1500",
      region: "Russia",
      positionJob: "Senior",
      url: "",
    },
    {
      id: 2,
      name: "Php Developer",
      salary: "1100",
      region: "Russia",
      positionJob: "Middle",
      url: "",
    },
    {
      id: 3,
      name: "WordPress Developer",
      salary: "1100",
      region: "Russia",
      positionJob: "Senior",
      url: "",
    },
    {
      id: 4,
      name: "Laravel Developer",
      salary: "550",
      region: "Russia",
      positionJob: "Junior",
      url: "",
    },
  ],
  newCareerVacanci: {
    name: "dgd",
    salary: "2",
    region: "2",
    positionJob: "2",
    url: "2",
  },
};
it("add vacanci/ should be incremented", () => {
  let action = addVacanci();
  
  let newState = careerVacanciesReducer(state, action);

  expect(newState.vacancies.length).toBe(5);
});
it("add vacanci / newCareerVacanci.name not be empty", () => {
  let action = addVacanci();
  
  let newState = careerVacanciesReducer(state, action);

  expect(newState.newCareerVacanci.name).toBe("");
});
