import React,{useContext} from 'react'
import UserLanguage from './CreatLanguage';

export const Header2 = () => {

    const {lan,setlan} = useContext(UserLanguage);

    const myHandler = (e) => {
        setlan(e.target.value)
    }
  return (
    <div>
        <select onChange={myHandler}>
            <option value="en">English</option>

            <option value="guj">Gujrati</option>
        </select>
    </div>
  )
}
