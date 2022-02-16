import React, { useEffect, useState } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function JoinUs(props) {
    const { data } = props;
    const [jobSelected, setJobSelected] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState('');
    const [message, setMessage] = useState('');

    const handleSelectFile = (e) => {
        e.preventDefault();
        document.getElementById('file').click();
    }

    const sendEmail = (e) => {
        e.preventDefault();
        let feedback = document.getElementById('feedback');

          if (!jobSelected) {
            feedback.textContent = "Please select a job";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        } else if (name === '') {
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
        } else if (file === '') {
            feedback.textContent = "Please enter your file";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        } else if (message === "") {
            feedback.textContent = "Please enter your cover letter";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        }

        var templateParams = {
                ref: jobSelected,
                name: name,
                email: email,
                phone: phone,
                file: file,
                lettre: message,
        }
        
        const serviceID = 'service_7rmrm67';
        const templateID = 'template_hu6i7kp';
        const userID = 'user_SLJ8sSNE36vqSQnSZKzPt';

        try {
            emailjs.send(serviceID, templateID, templateParams, userID);
            feedback.style.color = "#080";
            feedback.textContent = data.feedback_message;
            feedback.style.display = "block";
            setName('');
            setEmail('');
            setPhone('');
            setFile('');
            setMessage('');

        } catch(error) {
            console.log({error})
            feedback.textContent = data.error_message;
            feedback.style.color = "#F00";
            feedback.style.display = "block";
        }
    }

    useEffect(() => {
       if (jobSelected) {
        window.scrollTo({ top: (document.getElementById('form').offsetTop - 100), behavior: 'smooth' });
       }
    }, [jobSelected])

    return (
        <div className="service-page">
            <div className="page-header video">
                <video width="100%" autoPlay={true} muted={true} loop={true}>
                        <source src="/images/join.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <div className="header-overlay video"></div>
            </div>
            <div className="mycontainer flex job">
                <div className="col-65">
                    <div className="job-list flex between">
                        {
                            data.jobs.map(job =>
                                <div key={job.ref} className={jobSelected === job.ref ? "job selected" : "job"} onClick={e => setJobSelected(job.ref)}>
                                    <h3 className={data.lang === "ar" ? "rtl" : ""}>{job.title}</h3>
                                    <p className={data.lang === "ar" ? "rtl" : ""}>{job.desc}</p>
                                    <div className="job-actions">
                                        <span><LocationOnOutlinedIcon />{data.jobCity}</span>
                                        <button className="job-select">{jobSelected === job.ref ? data.jobSelected : data.jobSelect}</button>
                                    </div>
                                    <div className="job-ref">
                                        {job.ref}
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    
                </div>
                <div className="col-35">
                    <div id="form" className="contact-form join">
                        <h4>{data.joinProcess}</h4>
                        <form className={data.lang === 'ar' ? 'reverse-form' : ''}>
                            <div className={jobSelected ? 'input-icon-container selected' : "input-icon-container"}>
                            <input className={jobSelected ? 'jobSelected' : 'notSelected'} readOnly value={jobSelected ? jobSelected : ''} type="text" placeholder={data.jobSelectedHolder} />
                            <CheckCircleIcon className={data.lang === "ar" ? "rtl-left" : ""} />
                            </div>
                            <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder={data.contactName} />
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder={data.contactEmail} />
                            <input value={phone} required onChange={e => setPhone(e.target.value)} type="tel" placeholder={data.contactPhone} />
                            <div className="file-input">
                                <button className={data.lang === "ar" ? "rtl-margin" : ""}
                                 onClick={e => handleSelectFile(e)}>{data.jobSelectFile} {file !== '' ? <CheckCircleIcon /> : null}</button>
                                <input id="file" value={file} required onChange={e => setFile(e.target.value)} type="file" />
                            </div>
                            <textarea onChange={e => setMessage(e.target.value)} placeholder={data.coverLettre}>
                            </textarea>
                            <div className="actions flex end">
                                <button type="submit" onClick={e => sendEmail(e)}><span>{data.sendBtn}</span> <SendIcon /></button>                                  
                            </div>
                            <div id="feedback"></div>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
