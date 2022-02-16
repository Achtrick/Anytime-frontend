import React from 'react';
import { Link } from 'react-router-dom';

export default function Process(props) {
    const { data } = props;
    return (
        <div className="process">
            <div className={data.lang === 'ar' ? "mycontainer flex reverse" : "mycontainer flex"}>
                <div data-aos="fade-right" className="col-2">
                    <h3>{data.processTitle}</h3>
                    <span className="myHr">&nbsp;</span>
                </div>
                <div data-aos="fade-left" className="col-2">
                    <p>{data.processParag}</p>
                    <Link to="/contact"><button className="mybtn">{data.contactBtn}</button></Link>
                </div>
            </div>
        </div>
    )
}
