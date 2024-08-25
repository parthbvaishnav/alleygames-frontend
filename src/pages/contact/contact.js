import React, { useState } from 'react';
import { facebook, infoicon1, infoicon2, instagram, rightarrow2, twitter } from '../../utils/ImagesLoad';
import { Link } from 'react-router-dom';
import { submitContactForm } from '../../utils/indexService';
import Loader from '../../components/loader/loader';

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
        setLoading(true)
        if (validateForm()) {
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
                                                    <li className="breadcrumb-item"><Link>Pages</Link></li>
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
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-text">
                                    <h5 className="sub-title">Contact</h5>
                                    <h2 className="title">Get in Touch</h2>
                                </div>
                                <div className="cus-mar d-flex justify-content-between align-items-center">
                                    <div className="single-box">
                                        <div className="icon-area">
                                            <img src={infoicon1} alt="icon"/>
                                        </div>
                                        <h5>Visit Us</h5>
                                        <p>1420 Grant Road, Frankton Queenstown, New Zealand</p>
                                    </div>
                                    <div className="single-box">
                                        <div className="icon-area">
                                            <img src={infoicon2} alt="icon"/>
                                        </div>
                                        <h5>Get in Touch</h5>
                                        <p className="phone-email">+123 456 789 0245</p>
                                        <p className="phone-email"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="157d7c55777c6f7067743b7c7a">[email&#160;protected]</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="col-12">
                                        <div className="single-input">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="John Doe"
                                                autoComplete="off"
                                                value={formData.name || ''}
                                                onChange={handleChange}
                                            />
                                            {formData.errors.name && <p className="error">{formData.errors.name}</p>}
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                id="email"
                                                placeholder="your@gmail.com"
                                                autoComplete="off"
                                                value={formData.email || ''}
                                                onChange={handleChange}
                                            />
                                            {formData.errors.email && <p className="error">{formData.errors.email}</p>}
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                cols="30"
                                                id="message"
                                                rows="4"
                                                placeholder="Type something here"
                                                value={formData.message || ''}
                                                onChange={handleChange}
                                            ></textarea>
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
            <section className="social-media">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-12">
                                <div className="section-text text-center">
                                    <h5 className="sub-title">Social Media</h5>
                                    <h2 className="title">Follow us on</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-xl-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src={facebook} alt="facebook"/>
                                    </div>
                                    <h4>Facebook</h4>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                                    <a href="https://www.facebook.com/">
                                        Follow US
                                        <div className="icon-area">
                                            <img src={rightarrow2} alt="icon"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src={twitter} alt="twitter"/>
                                    </div>
                                    <h4>Twitter</h4>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                                    <a href="https://www.twitter.com/">
                                        Follow US
                                        <div className="icon-area">
                                            <img src={rightarrow2} alt="icon"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="single-box">
                                    <div className="icon-area">
                                        <img src={instagram} alt="instagram"/>
                                    </div>
                                    <h4>Instagram</h4>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores. </p>
                                    <a href="https://www.instagram.com/">
                                        Follow US
                                        <div className="icon-area">
                                            <img src={rightarrow2} alt="icon"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
