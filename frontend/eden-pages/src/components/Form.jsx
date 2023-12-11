import React from "react";
import { useState } from "react";
import "./cont.css";
import {FaSearchLocation, FaPhone, FaEnvelope } from "react-icons/fa"

const Form = () => {
    const [data, setData] = useState({name:"", email: "", phone: "", message: "",});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const message = e.target.value;
        setData({...data, [name]: value})
    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(data)
    } 

    return(
        <div className="form">
        <form className="sheet" method="post" onSubmit={handleSubmit}>
            <h1 className="conttit">GET IN TOUCH</h1>
            <h2>“Growing Together, Harvesting success”</h2>
            <div class= "la">
                <div class="adress">
                <FaSearchLocation className="icon maplocation" beatFade />
                <h3>ADRESS</h3>
                <p>Collins Street West <br/>Victoria8007 Australia</p>
            </div>
            <div class="adress">
            <FaPhone className="icon phone"/>
                <h3>PHONE</h3>
                <p>+01 (0) 12 3456 7890<br/>
+01 (0) 12 3456 7891</p>
            </div>
            <div class="adress">
            <FaEnvelope className="icon envelope"/>
                <h3>EMAIL</h3>
                <p>info@eden.rw</p>
            </div>
            </div>
            <div class="bien">
            <div className="inputs">
            <input className="cont-input" type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter name" />
            <input  className="cont-input" type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="Enter your email" />
            <input className="cont-input" type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="Enter phone number" />
            </div>
            <div className="cont-txt">
           <textarea name="message" id="" cols="30" rows="2" onChange={handleChange} value={data.message} placeholder="Type here"/>
           </div>
           </div>
            <button type="submit" className="btn">send</button>
        </form>
        </div>
    )
}

export default Form