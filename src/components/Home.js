import React from 'react';
import DataVisual from './modules/DataVisual';
import Intro from './modules/Intro';
import ItSolution from './modules/ItSolution';
import KeyFeatures from './modules/KeyFeatures';
import Services from './modules/Services';
import ServiceManagement from './modules/ServiceManagement';
import WebAnalytics from './modules/WebAnalytics';
import Process from './modules/Process';
import GetInTouch from './modules/GetInTouch';

export default function Home(props) {
    const { data } = props;
    return (
        <div className="page-container home">
            <Intro data={data} />
            <ItSolution data={data} />
            <Services data={data} />
            <KeyFeatures data={data} />
            <DataVisual data={data} />
            <ServiceManagement data={data} />
            <WebAnalytics data={data} />
            <Process data={data} />
            <GetInTouch data={data} />
        </div>
    )
}
