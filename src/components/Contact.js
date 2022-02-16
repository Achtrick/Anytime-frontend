import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';

export default function Contact(props) {
    const { data } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        let feedback = document.getElementById('feedback');

        if (name === '') {
            feedback.textContent = "Please enter your name";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        } else if (email === '') {
            feedback.textContent = "Please enter your email";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        } else if (phone === '') {
            feedback.textContent = "Please enter your phone";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        } else if (message === "") {
            feedback.textContent = "Please enter your message";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        }

        var templateParams = {
                name: name,
                email: email,
                phone: phone,
                message: message,
                
        }
        const serviceID = 'service_7rmrm67';
        const templateID = 'template_l8csal8';
        const userID = 'user_SLJ8sSNE36vqSQnSZKzPt';

        try {
            emailjs.send(serviceID, templateID, templateParams, userID);
            feedback.textContent = data.feedback_message;
            feedback.style.color = "#080";
            feedback.style.display = "block";
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');

        } catch(error) {
            console.log({error})
            feedback.textContent = data.error_message;
            feedback.style.color = "#F00";
            feedback.style.display = "block";
        }
    }

    return (
        <div className="contact-page">
            <div className="contact-intro">
                <div className="flex">
                    <img className="contact-img" src="/images/contact.png" alt="Contact" />
                    <div className="col-35">
                        
                    </div>
                    <div className="col-65">
                        <div className="contact-form">
                            <h2>{data.contactUs}</h2>
                            <form className={data.lang === 'ar' ? 'reverse-form' : ''}>
                                <input required onChange={e => setName(e.target.value)} type="text" placeholder={data.contactName} />
                                <input onChange={e => setEmail(e.target.value)} type="email" placeholder={data.contactEmail} />
                                <input required onChange={e => setPhone(e.target.value)} type="tel" placeholder={data.contactPhone} />
                                <textarea onChange={e => setMessage(e.target.value)} placeholder={data.contactMessage}>
                                </textarea>
                                <div className="actions flex between">
                                    <button type="submit" onClick={e => sendEmail(e)}><span>{data.sendBtn}</span> <SendIcon /></button>
                                    <div className="socials flex between">
                                        <a data-aos="fade-up" data-aos-duration="300" data-aos-delay="0" href="https://www.facebook.com/anywhere4" target="_blanc" rel="noreferrer noopener">
                                            <img src="/images/socials/facebook.png" alt="Social" />
                                        </a>
                                        <a data-aos="fade-up" data-aos-duration="600" data-aos-delay="40" href="https://www.linkedin.com/company/anytime-anywhere/" target="_blanc" rel="noreferrer noopener">
                                            <img src="/images/socials/linkedin.png" alt="Social" />
                                        </a>
                                        <a data-aos="fade-up" data-aos-duration="800" data-aos-delay="80" href="https://twitter.com/Anytime84433409?s=09" target="_blanc" rel="noreferrer noopener">
                                            <img src="/images/socials/twitter.png" alt="Social" />
                                        </a>
                                        <a data-aos="fade-up" data-aos-duration="1800" data-aos-delay="120" href="https://www.instagram.com/anytime4anywhere/" target="_blanc" rel="noreferrer noopener">
                                            <img src="/images/socials/instagram.png" alt="Social" />
                                        </a>
                                    </div>                                    
                                </div>
                                <div id="feedback"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-infos flex">
                <iframe title="Anywhere&Anytime"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1079.388789551781!2d10.630608221704131!3d35.83645333018346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13027576542f7433%3A0x98bf17040044656b!2sAnytime%20%26%20Anywhere!5e0!3m2!1sen!2stn!4v1627823368789!5m2!1sen!2stn" 
                        loading="lazy">
                </iframe>
            </div>
        </div>
    )
}
