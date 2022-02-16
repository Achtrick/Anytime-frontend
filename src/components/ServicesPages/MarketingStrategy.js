import React from 'react';
import {ReactComponent as ObjectifSmart } from '../../assets/strategy/objectifSmart.svg';
import {ReactComponent as MarketAnalyse } from '../../assets/strategy/market.svg';
import {ReactComponent as Concurence } from '../../assets/strategy/concurence.svg';
import {ReactComponent as Identification } from '../../assets/strategy/identification.svg';
import {ReactComponent as Positionnement } from '../../assets/strategy/positionnement.svg';
import {ReactComponent as Communication } from '../../assets/strategy/communication.svg';

export default function MarketingStrategy(props) {
    const { data } = props;
    return (
        <div className="service-page">
            <div className="page-header">
                <img src="/images/marketing-strategy.jpg" alt="Marketing" />
                <div className="header-overlay">
                    <h2 data-aos="fade-left" data-aos-duration="1200">{data.marketingStrategy}</h2>
                </div>
            </div>
            <div className="mycontainer">
                <div className={ data.lang ==='ar' ? "mycontent flex wrap reverse" : "mycontent flex wrap"}>
                    <div className="col-65" data-aos="fade-right" data-aos-duration="1200">
                        <p>
                            {data.strategyP1}<br /> 
                            {data.strategyP2}<br />
                        </p>
                    </div>
                    <div className="col-35" data-aos="fade-left" data-aos-duration="1200">
                        <div className="myicons-container">
                            <div className="myicon">
                                <img src="/images/icons/segmentation.png" alt="Icon" />
                                <strong>{data.segmentation}</strong>
                            </div>
                            <div className="myicon">
                                <img src="/images/icons/ciblage.png" alt="Icon" />
                                <strong>{data.targeting}</strong>
                            </div>
                            <div className="myicon">
                                <img src="/images/icons/positionnement.png" alt="Icon" />
                                <strong>{data.positioning}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex start wrap">
                    <div className="col-35 mb-40" data-aos="flip-left" data-aos-duration="2000" >
                        <img className="steps-img" src="/images/strategy.jpg" alt="Strategy" />
                    </div>
                    <div className="col-65">
                        <div className="flex between wrap">
                            <div className="step" data-aos="fade-down-right" data-aos-duration="2500" data-aos-delay="50">
                                <ObjectifSmart />
                                <h4>{data.smartGoals}</h4>
                            </div>
                            <div className="step" data-aos="fade-down" data-aos-duration="2200" data-aos-delay="100">
                                <MarketAnalyse />
                                <h4>{data.marketWatch}</h4>
                            </div>
                            <div className="step" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
                                <Concurence />
                                <h4>{data.competitiveIntelligence}</h4>
                            </div>
                            <div className="step" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                                <Identification />
                                <h4>{data.marketingTarget}</h4>
                            </div>
                            <div className="step" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="200">
                                <Positionnement />
                                <h4>{data.marketingPosition}</h4>
                            </div>
                            <div className="step" data-aos="fade-up-left" data-aos-duration="3000" data-aos-delay="300">
                                <Communication />
                                <h4>{data.communicationStrategy}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
