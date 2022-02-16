import React from 'react';
import {ReactComponent as Seo } from '../../assets/digital/seo.svg';
import {ReactComponent as Performance } from '../../assets/digital/performance.svg';
import {ReactComponent as Mail } from '../../assets/digital/mail.svg';
import {ReactComponent as Ads } from '../../assets/digital/ads.svg';
import {ReactComponent as Media } from '../../assets/digital/media.svg';
import {ReactComponent as BtoB } from '../../assets/digital/btob.svg';

export default function DigitalMarketing(props) {
    const { data } = props;
    return (
        <div className="service-page">
            <div className="page-header">
                <img src="/images/digital-marketing.jpg" alt="Marketing" />
                <div className="header-overlay">
                    <h2 data-aos="fade-left" data-aos-duration="1200">{data.digitalMarketing}</h2>
                </div>
            </div>
            <div className="mycontainer">
                <div className="flex start wrap">
                    <div className="col-35 mb-40" data-aos="flip-left" data-aos-duration="2000" >
                        <img className="steps-img" src="/images/digital.jpg" alt="Strategy" />
                    </div>
                    <div className="col-65">
                        <div className="flex between wrap">
                            <div className="step" data-aos="fade-down-right" data-aos-duration="2500" data-aos-delay="50">
                                <Seo />
                                <h4>{data.seaSeo}</h4>
                            </div>
                            <div className="step" data-aos="fade-down" data-aos-duration="2200" data-aos-delay="100">
                                <Performance />
                                <h4>{data.performanceMarketing}</h4>
                            </div>
                            <div className="step" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
                                <Mail />
                                <h4>{data.emailing}</h4>
                            </div>
                            <div className="step" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                                <Ads />
                                <h4>{data.marketingPub}</h4>
                            </div>
                            <div className="step" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="200">
                                <Media />
                                <h4>{data.marketingMedia}</h4>
                            </div>
                            <div className="step" data-aos="fade-up-left" data-aos-duration="3000" data-aos-delay="300">
                                <BtoB />
                                <h4>{data.marketingbtob}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
