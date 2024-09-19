import { Component } from "react";
import './index.css'
import Button from 'react-bootstrap/Button';
import withNavigate from '../withNavigate/';

// In this Page I used class component with state

class FirstPage extends Component{
    state={name:"",email:"",phone:"",fill:true,emailValid:true}
    componentDidMount(){
        const nameValue=localStorage.getItem("name")
        const checkNameValue=typeof(nameValue)==="string"?nameValue:""
        const emailValue=localStorage.getItem("email")
        const checkEmailValue=typeof(emailValue)==="string"?emailValue:""
        const phoneValue=localStorage.getItem("phone")
        const checkPhoneValue=typeof(phoneValue)==="string"?phoneValue:""
        this.setState({name:checkNameValue,email:checkEmailValue,phone:checkPhoneValue})
    }
    //change the name
    changeName=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    // change the email
    changeEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    //change the phone number
    changePhone=(event)=>{
        this.setState({phone:event.target.value})
    }
    // Onclick next button
    next=()=>{            
        const{name,email,phone}=this.state
        if(name===""|| email===""||phone===""){
            this.setState({fill:false})
        }else if(phone.length!==10&& phone!==""){
            this.setState({fill:false})
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            this.setState({emailValid:false})
        }
        else{
            localStorage.setItem("email",email)
            localStorage.setItem("name",name)
            localStorage.setItem("phone",phone)
            this.props.navigate('/secondPage');
        }
    }
    onFormClick=(event)=>{
        event.preventDefault()
    }  
    render(){
        const{fill,name,email,phone,emailValid}=this.state
        // check wheather the data is filled or not 
        const checkName=fill===false&&name===""?true:false
        const checkEmail=fill===false&&email===""?true:false
        const checkPhone=fill===false&&phone===""?true:false
        const changePhoneLength=fill===false&&phone.length!==10&&phone!==""?true:false
        const changeEmailValid=emailValid===false?true:false
        return <>     
            <div className="firstPage">
                <form className="form" onClick={this.onFormClick}>
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" id="name" placeholder="Enter your name.."  onChange={this.changeName}  value={name}/>
                    {checkName&&<p className="errorMsg">Please enter the name*</p>}
                    <label htmlFor="email" className="label">Email</label>
                    <input type="text" id="email" placeholder="Enter your email.."  onChange={this.changeEmail} value={email} />
                    {checkEmail&&<p className="errorMsg">Please enter the email*</p>}
                    {changeEmailValid&&<p className="errorMsg">Please enter the valid email*</p>}
                    <label htmlFor="phoneNo" className="label">Phone</label>
                    <input type="text" id="phoneNo" placeholder="Enter your phoneNo.."  onChange={this.changePhone} value={phone} />
                    {checkPhone&&<p className="errorMsg">Please enter the phone number*</p>}
                    {changePhoneLength&&<p className="errorMsg">Please enter the valid phone number*</p>}
                </form>
                <div className="btnContainer">
                  <Button className="btn btn-secondary">Back</Button>
                  <Button onClick={this.next}>Next</Button>    
                </div>
            </div>
            </>
        }
    
}
export default withNavigate(FirstPage);
