import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitContactForm } from '../../utils/indexService';
import Loader from '../../components/loader/loader';
import ParticleBg from '../../components/particleBg/particleBg';

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        errors: {
            name: '',
            email: '',
            message: ''
        }
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
            errors: {
                ...formData.errors,
                [id]: ''
            }
        });
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
            valid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            valid = false;
        }

        setFormData({
            ...formData,
            errors: errors
        });

        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (validateForm()) {
            setLoading(true)
            const dataToSend = {
                Name: formData.name,
                Email: formData.email,
                Message: formData.message
            };

            try {
                const response = await submitContactForm(dataToSend);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    errors: {
                        name: '',
                        email: '',
                        message: ''
                    }
                });
                setLoading(false)
                console.log('Form submitted successfully:', response);
                // Clear the form or handle success response
            } catch (error) {
                setLoading(false)
                console.error('Error submitting the form:', error);
                // Handle error
            }
        }
    };

    return (
        <>
        {loading && <Loader/>}
            <section className="banner-section inner-banner contact">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h1>Contact</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="get-in-touch">
                <ParticleBg/>
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="col-12">
                                        <div className="single-input">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name"placeholder="John Doe" style={{borderColor:formData.errors.message ? "#d54443" : "#694cb9"}} autoComplete="off"value={formData.name || ''} onChange={handleChange}/>
                                            {formData.errors.name && <p className="error">{formData.errors.name}</p>}
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" id="email" placeholder="your@gmail.com" style={{borderColor:formData.errors.message ? "#d54443" : "#694cb9"}} autoComplete="off" value={formData.email || ''} onChange={handleChange}/>
                                            {formData.errors.email && <p className="error">{formData.errors.email}</p>}
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="message">Message</label>
                                            <textarea cols="30" id="message" rows="4" style={{borderColor:formData.errors.message ? "#d54443" : "#694cb9"}} placeholder="Type something here" value={formData.message || ''} onChange={handleChange}></textarea>
                                            {formData.errors.message && <p className="error">{formData.errors.message}</p>}
                                        </div>
                                        <div className="btn-area text-center">
                                            <button className="cmn-btn" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
