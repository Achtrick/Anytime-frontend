import React from 'react';
import { ReactComponent as Fedelisation } from '../../assets/commercial/fedelisation.svg';
import { ReactComponent as Strategie } from  '../../assets/commercial/strategie.svg';
import { ReactComponent as Nouveau } from  '../../assets/commercial/nouveau.svg';
import { ReactComponent as Multicanale } from  '../../assets/commercial/multicanale.svg';

export default function CommercialProspecting(props) {
    const { data } = props;
    return (
        <div className="service-page">
            <div className="page-header">
                <img src="/images/commercial.jpg" alt="Commercial" />
                <div className="header-overlay">
                    <h2 data-aos="fade-left" data-aos-duration="1200">{data.commercialProspecting}</h2>
                </div>
            </div>
            <div className="mycontainer">
                <div className="mycontent" data-aos="fade-right" data-aos-duration="1200">
                    <p className={ data.lang ==='ar' ? "prospectingP reverse" : "prospectingP"} >
                        {data.prospectingP}
                    </p>
                </div>
                <div className="flex start wrap">
                    <div className="col-35 mb-40 " data-aos="flip-left" data-aos-duration="2000" >
                        <img className="steps-img" src="/images/comm.jpg" alt="Commercial" />
                    </div>
                    <div className="col-65">
                        <div className="flex between wrap">
                            <div className="step com" data-aos="fade-left" data-aos-duration="2500" data-aos-delay="50">
                                <Strategie />
                                <h4>{data.commercialStrategy}</h4>
                            </div>
                            <div className="step com" data-aos="fade-right" data-aos-duration="2200" data-aos-delay="100">
                                <Multicanale />
                                <h4>{data.multichannelProspecting}</h4>
                            </div>
                            <div className="step com" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
                                <Fedelisation />
                                <h4>{data.customerLoyalty}</h4>
                            </div>
                            <div className="step com" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                                <Nouveau />
                                <h4>{data.conquerNewMarket}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
