import React from 'react'

export default function ItSolution(props) {
    const { data } = props;
    return (
        <div className="it-solution">
            <div className={ data.lang ==='ar' ? "mycontainer flex reverse" : "mycontainer flex"}>
                <div data-aos="fade-right" className="col-2">
                    <img className="slideMeFromLeft delay" src="/images/it-solution.jpg" alt="IT" />
                </div>
                <div data-aos="fade-left" className="col-2">
                    <h2>{ data.itSolutionTitle }</h2>
                    <p>{ data.itSolutionParag }</p>
                </div>
            </div>
        </div>
    )
}
