import React from 'react'

export default function ServiceManagement(props) {
    const { data } = props;
    
    return (
        <div className="it-solution-right">
            <div className={ data.lang ==='ar' ? "mycontainer flex reverse" : "mycontainer flex"}>
                <div data-aos="fade-right" className="col-2">
                    <h2>{ data.managementServiceTitle }</h2>
                    <p>{ data.managementServiceParag }</p>
                </div>
                <div data-aos="fade-left" className="col-2">
                    <img src="/images/it-solution-right.jpg" alt="IT" />
                </div>
            </div>
        </div>
    )
}
