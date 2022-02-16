import React from 'react';
import {ReactComponent as Marketing } from '../../assets/strategy-marketing.svg';
import {ReactComponent as Degital } from '../../assets/marketing-degital.svg';
import {ReactComponent as Design } from '../../assets/graphic-design.svg';
import {ReactComponent as Developement } from '../../assets/development.svg';
import { useHistory } from 'react-router-dom';

export default function Services(props) {
    const { data } = props;
    const history = useHistory();
    return (
        <div  className={ data.lang === 'ar' ? 'services reverse' : 'services'} >
            <div className="mycontainer">
                <div data-aos="fade-right" className="it-bg" style={{ backgroundImage: "url('/images/it-bg.png')"}}>&nbsp;</div>
                <img className="services-bg" src="/images/services.jpg" alt="Service" />
                <div className={ data.lang === 'ar' ? 'web-data reverse' : 'web-data'}>
                    <h2>{data.serviceTitle}</h2>
                </div>
                <div className="services-data">
                    <div data-aos="fade-down-right" className="services-block" onClick={e => history.push('/services/strategy-marketing')}>
                        <span><Marketing /></span>
                        <h4>{data.service1}</h4>
                        <ul>
                            <li>{data.service1Point1}</li>
                            <li>{data.service1Point2}</li>
                            <li>{data.service1Point3}</li>
                        </ul>
                    </div>
                    <div data-aos="fade-down-left" className="services-block" onClick={e => history.push('/services/marketing-digital')}>
                        <span><Degital /></span>
                        <h4>{data.service2}</h4>
                        <ul>
                            <li>{data.service2Point1}</li>
                            <li>{data.service2Point2}</li>
                            <li>{data.service2Point3}</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up-right" className="services-block" onClick={e => history.push('/services/graphic-design')}>
                        <span><Design /></span>
                        <h4>{data.service3}</h4>
                        <ul>
                            <li>{data.service3Point1}</li>
                            <li>{data.service3Point2}</li>
                            <li>{data.service3Point3}</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up-left" className="services-block" onClick={e => history.push('/services/development')}>
                        <span><Developement /></span>
                        <h4>{data.service4}</h4>
                        <ul>
                            <li>{data.service4Point1}</li>
                            <li>{data.service4Point2}</li>
                            <li>{data.service4Point3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
