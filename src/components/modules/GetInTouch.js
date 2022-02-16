import React from 'react';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';

export default function GetInTouch(props) {
    const { data } = props;

    return (
        <div className="get-in-touch">
            <div className="mycontainer">
                <h2>{data.contactTitle}</h2>
                <p>{data.contactParag}</p>
            </div>
            <div className="mycontainer flex between">
                <a href="https://goo.gl/maps/TWbqEb7siNgP7Nd66" 
                    target="_blanc" rel="noreferrer noopener" 
                    data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="col-3">
                    <span><RoomOutlinedIcon /></span>
                    <h4>{data.adressTitle}</h4>
                    <p className="adress">{data.adress}</p>
                </a>
                <a href={`mailto:${data.email}`} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" className="col-3">
                    <span><EmailOutlinedIcon /></span>
                    <h4>{data.emailTitle}</h4>
                    <p className="adress">{data.email}</p>
                </a>
                <a href={`tel:${data.phone}`} data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000" className="col-3">
                    <span><PhoneInTalkOutlinedIcon /></span>
                    <h4>{data.phoneTitle}</h4>
                    <p className="adress">{data.phone}</p>
                </a>
            </div>
        </div>
    )
}
