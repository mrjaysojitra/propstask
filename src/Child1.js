import React,{useContext} from "react";
import UserLanguage from "./CreatLanguage";

export const Child1 = () => {
  const { lan, setlan } = useContext(UserLanguage);

  const Language = {
    'en': {
      firstName: "firstName",
      lastName: "lastName"
    },

    'guj': {
     
      firstName: "પ્રથમનામ",
      lastName: "છેલ્લુંનામ"
    }
  };
  return <div>
    <form>
      <label>{Language[lan].firstName}</label>
      <input type="text"></input>

      <label>{Language[lan].lastName}</label>
      <input type="text"></input><br/>

      <input type='button' value="Save"></input>
    </form>
  </div>;
};
