import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/Contact', formData);
            setFormData({ name: "", email: "", message: ""});
            setResponseMessage("Your message has been sent successfully!");
        } catch (error) {
            setResponseMessage("There was an error sending your message. Please try again.");
            console.error("There was an error!", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '200px', borderRadius:"20px",  backgroundColor:"black", color:"#d7942d", border:"none"}}>Submit</button>
                {responseMessage && <p className="mt-3">{responseMessage}</p>}
            </form>
        </div>
    );
}

export default Contact;
