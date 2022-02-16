import React from 'react'

export default function WebAnalytics(props) {
    const { data } = props;
    return (
        <div className="web-analytics">
            <div className="mycontainer">
                <div data-aos="fade-up-left" data-aos-duration="2000" className="blue-bg">&nbsp;</div>
                <img className="web-analytics-img" src="/images/web-analytics.jpg" alt="Web" />
                <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="50" className="web-bg" style={{ backgroundImage: "url('/images/it-bg.png')"}}>&nbsp;</div>
                <div className={ data.lang === 'ar' ? 'web-data reverse' : 'web-data'}>
                    <h2>{data.webAnalyticsTitle}</h2>
                    <p>{data.webAnalyticsParag}</p>
                </div>
            </div>
        </div>
    )
}
