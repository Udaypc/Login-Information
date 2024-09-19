import './index.css'
import Button from 'react-bootstrap/Button';
import {NavLink,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';



const SecondPage=(props)=>{
    const[obj,setState]=useState({Address1:"",Address2:"",State:"",City:"",ZipCode:"",fill:true})
    const navigate=useNavigate()
    useEffect(()=>{
        const Address1Value=localStorage.getItem("Address1")!=="null"?localStorage.getItem("Address1"):""
        const Address2Value=localStorage.getItem("Address2")!=="null"?localStorage.getItem("Address2"):""
        const StateValue=localStorage.getItem("State")!=="null"?localStorage.getItem("State"):""
        const CityValue=localStorage.getItem("City")!=="null"?localStorage.getItem("City"):""
        const ZipCodeValue=localStorage.getItem("ZipCode")!=="null"?localStorage.getItem("ZipCode"):""
       
        setState(obj=>({fill:true,Address1:Address1Value,Address2:Address2Value,State:StateValue,City:CityValue,ZipCode:ZipCodeValue}))
       
    },[])
    const changeAddress1=(event)=>{
        setState(obj=>({...obj,Address1:event.target.value}))
    }
    const changeAddress2=(event)=>{
        setState(obj=>({...obj,Address2:event.target.value}))
    }
    const changeCity=(event)=>{
        setState(obj=>({...obj,City:event.target.value}))
    }
    const changeState=(event)=>{
        setState(obj=>({...obj,State:event.target.value}))
    }
    const changeZipCode=(event)=>{
        setState(obj=>({...obj,ZipCode:event.target.value}))
    }
    const next=()=>{
      const{Address1,Address2,City,State,ZipCode}=obj
      console.log(Address1)
      if(Address1===""||Address2===""||City===""||State===""||ZipCode===""||Address1===null||Address2===null||City===null||State===null||ZipCode===null){
        setState(obj=>({...obj,fill:false}))
      }else{
        localStorage.setItem("Address1",Address1)
        localStorage.setItem("Address2",Address2)
        localStorage.setItem("City",City)
        localStorage.setItem("State",State)
        localStorage.setItem("ZipCode",ZipCode)
        navigate("/thirdPage")
      }
    }
    const onFormClick=(e)=>{
       e.preventDefault()
    }
    return <div className="secondPage">
        <form className='form2' onClick={onFormClick}>
            <label htmlFor="Address1">Address Line 1</label>
            <input type="text" id="Address1" onChange={changeAddress1} value={obj.Address1}/>
            {(obj.Address1===""&&obj.fill===false)||(obj.Address1===null&&obj.fill===false)?<p className='errorMsg'>Please enter the address*</p>:""}
            <label htmlFor="Address2">Address Line 2</label>
            <input type="text" id="Address2" onChange={changeAddress2} value={obj.Address2}/>
            {(obj.Address2===""&&obj.fill===false)||(obj.Address2===null&&obj.fill===false)?<p className='errorMsg'>Please enter the address*</p>:""}
            <label htmlFor="city">City</label>
            <input type="text" id="city" onChange={changeCity} value={obj.State}/>
            {(obj.City===""&&obj.fill===false)||(obj.City===null&&obj.fill===false)?<p className='errorMsg'>Please enter the city*</p>:""}
            <div className='d-flex mt-3 bottomContainer '>
                <label htmlFor="state">State</label>
                <div>
                    <input type="text" id="state" onChange={changeState} value={obj.City}/>
                    {(obj.State===""&&obj.fill===false)||(obj.State===null&&obj.fill===false)?<p className='errorMsg'>Please enter the state*</p>:""}
                </div>
                <label htmlFor="zipcode">Zip Code</label>
                <div>
                    <input type="text" id="zipcode" onChange={changeZipCode} value={obj.ZipCode}/>
                    {(obj.ZipCode===""&&obj.fill===false)||(obj.ZipCode===null&&obj.fill===false)?<p className='errorMsg'>Please enter the zipcode*</p>:""}
                </div>
            </div>

        </form>
        <div className="btnContainer">
           <NavLink to="/"><Button>Back</Button></NavLink>
           <Button onClick={next}>Next</Button>
         </div>
    </div>
}
export default SecondPage