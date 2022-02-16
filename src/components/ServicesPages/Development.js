import React from 'react';
import {ReactComponent as Static } from '../../assets/development/static.svg';
import {ReactComponent as Portfolio } from '../../assets/development/portfolio.svg';
import {ReactComponent as Catalog } from '../../assets/development/catalog.svg';
import {ReactComponent as Shop } from '../../assets/development/shop.svg';
import {ReactComponent as WebApp } from '../../assets/development/webapp.svg';
import {ReactComponent as Mobile } from '../../assets/development/mobileapp.svg';

export default function Development(props) {
    const { data } = props;
    return (
        <div className="service-page">
            <div className="page-header">
                <img src="/images/development-page.jpg" alt="Marketing" />
                <div className="header-overlay">
                    <h2 data-aos="fade-left" data-aos-duration="1200">{data.developmentPageTitle}</h2>
                </div>
            </div>
            <div className="mycontainer">
                <div className="flex start wrap">
                    <div className="col-35 mb-40" data-aos="flip-left" data-aos-duration="2000" >
                        <img className="steps-img" src="/images/responsive.jpg" alt="Strategy" />
                    </div>
                    <div className="col-65">
                        <div className="flex between wrap">
                            <div className="step" data-aos="fade-down-right" data-aos-duration="2500" data-aos-delay="50">
                                <Static />
                                <h4>{data.landingPages}</h4>
                            </div>
                            <div className="step" data-aos="fade-down" data-aos-duration="2200" data-aos-delay="100">
                                <Portfolio />
                                <h4>{data.portfolioWebsites}</h4>
                            </div>
                            <div className="step" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
                                <Catalog />
                                <h4>{data.catalogWebsites}</h4>
                            </div>
                            <div className="step" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                                <Shop />
                                <h4>{data.eCommerce}</h4>
                            </div>
                            <div className="step" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="200">
                                <WebApp />
                                <h4>{data.webApps}</h4>
                            </div>
                            <div className="step" data-aos="fade-up-left" data-aos-duration="3000" data-aos-delay="300">
                                <Mobile />
                                <h4>{data.mobileApps}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
