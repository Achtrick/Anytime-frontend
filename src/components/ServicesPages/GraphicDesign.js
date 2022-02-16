import React from 'react';
import {ReactComponent as Identity } from '../../assets/design/identity.svg';
import {ReactComponent as Charter } from '../../assets/design/charter.svg';
import {ReactComponent as Docs } from '../../assets/design/docs.svg';
import {ReactComponent as Exibition } from '../../assets/design/exibition.svg';
import {ReactComponent as Layout } from '../../assets/design/layout.svg';
import {ReactComponent as UxDesign } from '../../assets/design/uxdesign.svg';

export default function GraphicDesign(props) {
    const { data } = props;
    return (
        <div className="service-page">
            <div className="page-header">
                <img src="/images/graphic-design.jpg" alt="Marketing" />
                <div className="header-overlay">
                    <h2 data-aos="fade-left" data-aos-duration="1200">{data.graphicDesign}</h2>
                </div>
            </div>
            <div className="mycontainer">
                <div className="flex start wrap">
                    <div className="col-35 mb-40" data-aos="flip-left" data-aos-duration="2000" >
                        <img className="steps-img" src="/images/design.jpg" alt="Strategy" />
                    </div>
                    <div className="col-65">
                        <div className="flex between wrap">
                            <div className="step" data-aos="fade-down-right" data-aos-duration="2500" data-aos-delay="50">
                                <Identity />
                                <h4>{data.visualIdentity}</h4>
                            </div>
                            <div className="step" data-aos="fade-down" data-aos-duration="2200" data-aos-delay="100">
                                <Charter />
                                <h4>{data.graphicaCharter}</h4>
                            </div>
                            <div className="step" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
                                <Docs />
                                <h4>{data.paperSupports}</h4>
                            </div>
                            <div className="step" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                                <Exibition />
                                <h4>{data.exibitionSupports}</h4>
                            </div>
                            <div className="step" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="200">
                                <Layout />
                                <h4>{data.editingLayout}</h4>
                            </div>
                            <div className="step" data-aos="fade-up-left" data-aos-duration="3000" data-aos-delay="300">
                                <UxDesign />
                                <h4>{data.UiUxDesign}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
