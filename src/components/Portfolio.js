import React from 'react';

export default function Portfolio(props) {

    const { data } = props;

    return (
        <div className="portfolio-page">
            <div className="portfolio-head">
                <img src="/images/portfolio-background.jpg" alt="Portfolio" />
                <h2>{data.ourPortfolio}</h2>
            </div>
            <div className="portfolio-content">
                <div className="mycontainer flex between wrap">
                    {
                    data.portfolio.map(project =>
                        <div data-aos="fade-in" data-aos-duration="3000" data-aos-delay="20" className="portfolio">
                            <a href={project.url} target="_blanc" rel="noreferrer noopener">
                                <img src={`/images/portfolio/${project.photo}`} alt="Portfolio" />
                                <div className="myoverlay"></div>
                                <span>{project.name}</span>
                            </a>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}
