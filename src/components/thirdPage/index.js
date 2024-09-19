import './index.css'
import {v4} from 'uuid'
import Button from 'react-bootstrap/Button';

import { NavLink ,useNavigate} from 'react-router-dom';
const ThirdPage=()=>{
    const navigate=useNavigate()
    const submit=()=>{
        const nameValue=localStorage.getItem("name")
        const emailValue=localStorage.getItem("email")
        const phoneValue=localStorage.getItem("phone")
        const Address1Value=localStorage.getItem("Address1")
        const Address2Value=localStorage.getItem("Address2")
        const StateValue=localStorage.getItem("State")
        const CityValue=localStorage.getItem("City")
        const ZipCodeValue=localStorage.getItem("ZipCode")
        const newObj={name:nameValue,email:emailValue,phone:phoneValue,address1:Address1Value,address2:Address2Value,state:StateValue,city:CityValue,zipcode:ZipCodeValue}
        localStorage.setItem(v4(),newObj)
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("phone")
        localStorage.removeItem("Address1")
        localStorage.removeItem("State")
        localStorage.removeItem("City")
        localStorage.removeItem("Address2")
        localStorage.removeItem("ZipCode")
        navigate("/")
    }
    return <>
    <div className='thirdPage'>
        <div className='detailCard'>
            <p>Name:           {localStorage.getItem("name")}</p>
            <p>Email:          {localStorage.getItem("email")}</p>
            <p>Phone:          {localStorage.getItem("phone")}</p>
            <p>Address1:       {localStorage.getItem("Address1")}</p>
            <p>Address2:       {localStorage.getItem("Address2")}</p>
            <p>State:          {localStorage.getItem("State")}</p>
            <p>City:           {localStorage.getItem("City")}</p>
            <p>ZipCode:        {localStorage.getItem("ZipCode")}</p>
        </div>
        <div className="btnContainer">
            <NavLink to="/secondPage"><Button>Back</Button></NavLink>
            <Button onClick={submit}>Submit</Button>
        </div>
    </div>
    </>
}
export default ThirdPage