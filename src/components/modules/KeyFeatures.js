import React from 'react';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default function KeyFeatures(props) {

    const { data } = props;

    return (
        <div className="key-features">
            <div className="mycontainer block-title">
                <h2>{ data.featuresTitle }</h2>
                <p>{ data.featuresParag }</p>
            </div>
            <div className="mycontainer flex">
                <div className="col-2 feature" data-aos="fade-right" data-aos-duration="2500" >
                    <img src="/images/project-management.jpg" alt="Features" />
                </div>
                <div className="col-2 flex between wrap">
                    <div data-aos="zoom-in" data-aos-delay="40" data-aos-duration="1400" className="col-2 flex development">
                        <PaletteOutlinedIcon />
                        <p>01. { data.design }</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="60" data-aos-duration="1800" className="col-2 flex skills">
                        <CodeOutlinedIcon />
                        <p>02. { data.development }</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="80" data-aos-duration="2200" className="col-2 flex design">
                        <DevicesOutlinedIcon />
                        <p>03. { data.responsive }</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="3000" className="col-2 flex responsive">
                        <TrendingUpIcon />
                        <p>04. { data.seo }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
