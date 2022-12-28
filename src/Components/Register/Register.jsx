import axios from 'axios';
import React from 'react';
import { useState } from 'react';
const Register = () => {
    let[user,setUser]=useState({
firstName:'',
lastName:'',
age:'',
email:'',
mYpassword:'',
});
let submitFormData= async (e)=>{
e.preventDefault();
let {data}=await axios.post("",user);
console.log(data)
};
let getFormValue=(e)=>{
let myUser={...user};
myUser[e.target.name]=e.target.value;
setUser(myUser);
console.log(myUser)
       }
    return (
        <div>
<form onSubmit={submitFormData} className='container'>
  <div className="mb-3 ">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" onChange={getFormValue}  name='firstName' className="form-control" id="firstName" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 ">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input type="text" onChange={getFormValue} name ='lastName'className="form-control" id="lastName" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 ">
    <label htmlFor="age" className="form-label">Age</label>
    <input type="number" onChange={getFormValue} name ='age'className="form-control" id="age" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 ">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" onChange={getFormValue} name ='email' className="form-control" id="email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="mYpassword" className="form-label">Password</label>
    <input type="password" onChange={getFormValue} name='mYpassword' className="form-control" id="mYpassword" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    );
}

export default Register;
