import React from "react";
import { useState } from "react";
import cont from ".component/cont";
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
        <form method="post" onSubmit={handleSubmit}>
            <h1>GET IN TOUCH</h1>
            <h2>“Growing Together, Harvesting success”</h2>
            <div class= "la">
                <div class="adress">
                <FaSearchLocation className="icon maplocation" beatFade />
                <h3>ADRESS</h3>
                <p>Collins Street West Victoria8007 Australia</p>
            </div>
            <div class="adress">
            <FaPhone className="icon phone"/>
                <h3>PHONE</h3>
                <p>+01 (0) 12 3456 7890
+01 (0) 12 3456 7891</p>
            </div>
            <div class="adress">
            <FaEnvelope className="icon envelope"/>
                <h3>EMAIL</h3>
                <p>info@eden.rw</p>
            </div>
            </div>
            <div class="bien">
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter name" />
            <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="Enter your email" />
            <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="Enter phone number" /></div>
           <textarea name="message" id="" cols="30" rows="2" onChange={handleChange} value={data.message} placeholder="Type here"/>
            <button type="submit">send</button>
        </form>
    )
}

export default Form