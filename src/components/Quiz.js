import React, { useCallback, useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import {ReactComponent as Conception } from '../assets/categories/conception.svg';
import {ReactComponent as Development } from '../assets/categories/development.svg';
import {ReactComponent as Marketing } from '../assets/categories/marketing.svg';
import {ReactComponent as Identity } from '../assets/design/identity.svg';
import {ReactComponent as Charter } from '../assets/design/charter.svg';
import {ReactComponent as Docs } from '../assets/design/docs.svg';
import {ReactComponent as Exibition } from '../assets/design/exibition.svg';
import {ReactComponent as Layout } from '../assets/design/layout.svg';
import {ReactComponent as UxDesign } from '../assets/design/uxdesign.svg';
import {ReactComponent as Static } from '../assets/development/static.svg';
import {ReactComponent as Portfolio } from '../assets/development/portfolio.svg';
import {ReactComponent as Catalog } from '../assets/development/catalog.svg';
import {ReactComponent as Shop } from '../assets/development/shop.svg';
import {ReactComponent as WebApp } from '../assets/development/webapp.svg';
import {ReactComponent as Mobile } from '../assets/development/mobileapp.svg';
import {ReactComponent as Seo } from '../assets/digital/seo.svg';
import {ReactComponent as Performance } from '../assets/digital/performance.svg';
import {ReactComponent as Mail } from '../assets/digital/mail.svg';
import {ReactComponent as Ads } from '../assets/digital/ads.svg';
import {ReactComponent as Media } from '../assets/digital/media.svg';
import {ReactComponent as BtoB } from '../assets/digital/btob.svg';
import InfoIcon from '@material-ui/icons/Info';

export default function Quiz(props) {
    const { data } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [res, setRes] = useState(0);

    const daysCalculation = useCallback(() => {
        if (category && subCategory) {
            switch (category) {
                case "Design":
                    switch (subCategory) {
                        case "Visual identity":
                            setRes(4)
                            break;
                        case "Graphical charter":
                            setRes(8)
                            break;
                        case "Paper supports":
                            setRes(3)
                            break;
                        case "Exibition supports":
                            setRes(10)
                            break;
                        case "Editing and layout":
                            setRes(6)
                            break;
                        case "Ui & Ux Design":
                            setRes(15)
                            break;
                        default:
                            break;
                    }
                    break;
                case "Development":
                    switch (subCategory) {
                        case "Landing Pages":
                            setRes(3)
                            break;
                        case "Portfolio websites":
                            setRes(5)
                            break;
                        case "Catalog websites":
                            setRes(7)
                            break;
                        case "E-commerce platforms":
                            setRes(14)
                            break;
                        case "Web applications":
                            setRes(20)
                            break;
                        case "Mobile applications":
                            setRes(22)
                            break;
                        default:
                            break;
                    }
                    break;
                case "Marketing":
                    switch (subCategory) {
                        case "SEA & SEO":
                            setRes(2)
                            break;
                        case "Performance Marketing":
                            setRes(5)
                            break;
                        case "Loyalty and prospecting emailing":
                            setRes(2)
                            break;
                        case "Web & mobile advertising":
                            setRes(3)
                            break;
                        case "Digital integrated into the media":
                            setRes(7)
                            break;
                        case "Marketing digital B-to-B, CRM":
                            setRes(7)
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
    }, [category, subCategory])

    useEffect(() => {
        if (category) {
            window.scrollTo({ top: (document.getElementById('categories').offsetTop - 100), behavior: 'smooth' });
        }
        if (subCategory) {
            window.scrollTo({ top: (document.getElementById('form').offsetTop - 100), behavior: 'smooth' });
        }
        if (category && subCategory) {
            daysCalculation();
        } else {
            setRes(0);
        }
    }, [category, daysCalculation, subCategory])

    const sendEmail = (e) => {
        e.preventDefault();

        let feedback = document.getElementById('feedback');

          if (!category) {
            feedback.textContent = "Please select a category";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return

        } else if (!subCategory) {

            feedback.textContent = "Please select a service";
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
        } else if (message === "") {
            feedback.textContent = "Please enter your message";
            feedback.style.color = "#F00";
            feedback.style.display = "block";
            return
        }

        var templateParams = {
                category: category,
                subCategory: subCategory,
                name: name,
                email: email,
                phone: phone,
                message: message,
                
        }
        const serviceID = 'service_8qo838j';
        const templateID = 'template_hlipxne';
        const userID = 'user_y7TRN2vAYktf4zcqVrl3k';

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
        <div className="service-page">
            <div className="page-header">
                <img src="/images/quiz.jpg" alt="Quiz" />
                <div className="header-overlay">
                    <h2 data-aos="fade-left" data-aos-duration="1200">{data.requestQuote}</h2>
                </div>
            </div>
            <div className="mycontainer">
                <div className="flex categories">
                    <div className={category === "Design" ? "category active" : "category"} onClick={e => setCategory('Design')}>
                        <Conception />
                        <h5>{data.quoteDesign}</h5>
                    </div>
                    <div className={category === "Development" ? "category active" : "category"} onClick={e => setCategory('Development')}>
                        <Development />
                        <h5>{data.quoteDevelopment}</h5>
                    </div>
                    <div className={category === "Marketing" ? "category active" : "category"} onClick={e => setCategory('Marketing')}>
                        <Marketing />
                        <h5>{data.quoteMarketing}</h5>
                    </div>
                </div>
                <div id="categories" className="subcategories">
                    {
                        category === "Design" ? (
                            <div className="flex">
                                <div className={subCategory === "Visual identity" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Visual identity')}>
                                    <Identity />
                                    <h5>{data.visualIdentity}</h5>
                                </div>
                                <div className={subCategory === "Graphical charter" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Graphical charter')}>
                                    <Charter />
                                    <h5>{data.graphicaCharter}</h5>
                                </div>
                                <div className={subCategory === "Paper supports" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Paper supports')}>
                                    <Docs />
                                    <h5>{data.paperSupports}</h5>
                                </div>
                                <div className={subCategory === "Exibition supports" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Exibition supports')}>
                                    <Exibition />
                                    <h5>{data.exibitionSupports}</h5>
                                </div>
                                <div className={subCategory === "Editing and layout" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Editing and layout')}>
                                    <Layout />
                                    <h5>{data.editingLayout}</h5>
                                </div>
                                <div className={subCategory === "Ui & Ux Design" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Ui & Ux Design')}>
                                    <UxDesign />
                                    <h5>{data.UiUxDesign}</h5>
                                </div>
                            </div>
                        ) : category === "Development" ? (
                            <div className="flex">
                                <div className={subCategory === "Landing Pages" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Landing Pages')}>
                                    <Static />
                                    <h5>{data.landingPages}</h5>
                                </div>
                                <div className={subCategory === "Portfolio websites" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Portfolio websites')}>
                                    <Portfolio />
                                    <h5>{data.portfolioWebsites}</h5>
                                </div>
                                <div className={subCategory === "Catalog websites" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Catalog websites')}>
                                    <Catalog />
                                    <h5>{data.catalogWebsites}</h5>
                                </div>
                                <div className={subCategory === "E-commerce platforms" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('E-commerce platforms')}>
                                    <Shop />
                                    <h5>{data.eCommerce}</h5>
                                </div>
                                <div className={subCategory === "Web applications" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Web applications')}>
                                    <WebApp />
                                    <h5>{data.webApps}</h5>
                                </div>
                                <div className={subCategory === "Mobile applications" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Mobile applications')}>
                                    <Mobile />
                                    <h5>{data.mobileApps}</h5>
                                </div>
                            </div>
                        ) : category === "Marketing" ? (
                            <div className="flex">
                                <div className={subCategory === "SEA & SEO" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('SEA & SEO')}>
                                    <Seo />
                                    <h5>{data.seaSeo}</h5>
                                </div>
                                <div className={subCategory === "Performance Marketing" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Performance Marketing')}>
                                    <Performance />
                                    <h5>{data.performanceMarketing}</h5>
                                </div>
                                <div className={subCategory === "Loyalty and prospecting emailing" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Loyalty and prospecting emailing')}>
                                    <Mail />
                                    <h5>{data.emailing}</h5>
                                </div>
                                <div className={subCategory === "Web & mobile advertising" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Web & mobile advertising')}>
                                    <Ads />
                                    <h5>{data.marketingPub}</h5>
                                </div>
                                <div className={subCategory === "Digital integrated into the media" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Digital integrated into the media')}>
                                    <Media />
                                    <h5>{data.marketingMedia}</h5>
                                </div>
                                <div className={subCategory === "Marketing digital B-to-B, CRM" ? "subcategory active" : "subcategory"} onClick={e => setSubCategory('Marketing digital B-to-B, CRM')}>
                                    <BtoB />
                                    <h5>{data.marketingbtob}</h5>
                                </div>
                            </div>
                        ) : (
                            <div className="flex">
                                <div className="subcategory"></div>
                                <div className="subcategory"></div>
                                <div className="subcategory"></div>
                                <div className="subcategory"></div>
                                <div className="subcategory"></div>
                                <div className="subcategory"></div>
                            </div>
                        )
                    }
                </div>
                <div id="form" className="contact-form quiz">
                    <div className="flex between">
                        <div className={data.lang === "ar" ? "quiz-result flex reverse" : "quiz-result flex"}>
                            <span>{res}</span><span>{data.days}</span>
                        </div>
                        <div className={data.lang === "ar" ? "quiz-note reverse" : "quiz-note"}>
                            <InfoIcon />  {data.quizNote}
                        </div>
                    </div>
                    
                    <form className={data.lang === 'ar' ? 'reverse-form' : ''}>
                        <input required onChange={e => setName(e.target.value)} type="text" placeholder={data.contactName} />
                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder={data.contactEmail} />
                        <input required onChange={e => setPhone(e.target.value)} type="tel" placeholder={data.contactPhone} />
                        <textarea onChange={e => setMessage(e.target.value)} placeholder={data.quizDetails}>
                        </textarea>
                        <div className="actions flex end">
                            <button type="submit" onClick={e => sendEmail(e)}><span>{data.sendBtn}</span> <SendIcon /></button>                                 
                        </div>
                        <div id="feedback"></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
