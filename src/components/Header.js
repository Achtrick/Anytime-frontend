import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import {ReactComponent as Marketing } from '../assets/strategy-marketing.svg';
import {ReactComponent as Degital } from '../assets/marketing-degital.svg';
import {ReactComponent as Design } from '../assets/graphic-design.svg';
import {ReactComponent as Developement } from '../assets/development.svg';
import {ReactComponent as CommercialProspecting } from '../assets/commercial.svg';

export default function Header(props) {

    const { data, showListLangs } = props;
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const displayMenu = (e) => {
        e.preventDefault();
        setShowSubMenu(true);
    }

    const hideMenu = (e) => {
        e.preventDefault();
        setShowSubMenu(false);
    }

    return (
        <header id="header">
            <div className="mycontainer flex between">
                <div className="logo">
                    <Link to='/'><img src="/images/logo.png" alt="Logo" /></Link>
                </div>
                <div className="flex">
                    <div className="mymenu">
                        <ul>
                            <li><Link to='/' >{data.homePage}</Link></li>
                            <li><Link to='/about' >{data.aboutPage}</Link></li>
                            <li className="dropdown-container" onMouseEnter={e => displayMenu(e)} onMouseLeave={e => hideMenu(e)}>
                                <Link className="dropdown-link" to='#'>{data.servicePage}<ExpandMoreIcon id="arrow-dropdown"  className={showSubMenu ? 'rotate' : '' } /></Link>
                                <div className={showSubMenu ? "dropdown show-dropdown" : "dropdown"}>
                                    <Link to='/services/strategy-marketing' >
                                        <span className="svg-container"><Marketing /></span>
                                        <span>{data.service1}</span>
                                    </Link>
                                    <Link to='/services/commercial-prospecting' >
                                        <span className="svg-container"><CommercialProspecting /></span>
                                        <span>{data.service5}</span>
                                    </Link>
                                    <Link to='/services/marketing-digital' >
                                    <span className="svg-container"><Degital /></span>
                                        <span>{data.service2}</span>
                                    </Link>
                                    <Link to='/services/graphic-design' >
                                    <span className="svg-container"><Design /></span>
                                        <span>{data.service3}</span>
                                    </Link>
                                    <Link to='/services/developement' >
                                    <span className="svg-container"><Developement /></span>
                                        <span>{data.service4}</span>
                                    </Link>
                                </div>
                            </li>
                            <li><Link to='/portfolio' >{data.portfolioPage}</Link></li>
                            <li><Link to='/contact' >{data.contactPage}</Link></li>
                        </ul>
                    </div>
                    <MenuIcon className="mobile-block" onClick={() => setShowMenu(!showMenu)} />
                    <Link to="/quote-quiz"><button className="desktop-block">{data.devisBtn}</button></Link>
                    <div className="flex">
                        <img src={`/images/langs/${props.selectedLang}.png`} alt='Lang' className='selected-lang rotateMe' onClick={props.onShowListLang} />
                        <ExpandMoreIcon id="arrow" onClick={props.onShowListLang} className={showListLangs ? 'rotate' : '' } />
                        <div id="langs" className={ showListLangs ? "langs-list show" : "langs-list" }>
                            <ul>
                                <li className="lang" onClick={() => props.onSelectLang('en')} >
                                    <img src='/images/langs/en.png' alt='Lang' />&nbsp;English
                                </li>
                                <li className="lang" onClick={() => props.onSelectLang('fr')}>
                                    <img src='/images/langs/fr.png' alt='Lang' />&nbsp;Français
                                </li>
                                {/* <li className="lang" onClick={() => props.onSelectLang('al')}>
                                    <img src='/images/langs/al.png' alt='Lang' />&nbsp;Deutsche
                                </li> */}
                                <li className="lang" onClick={() => props.onSelectLang('ar')}>
                                    <img src='/images/langs/ar.png' alt='Lang' />&nbsp;عربي
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={showMenu ? 'showme' : ''}>
                <ul className={data.lang === 'ar' ? "reverse" : ""}>
                    <li><Link to='/' onClick={() => setShowMenu(false)} >{data.homePage}</Link></li>
                    <li><Link to='/about' onClick={() => setShowMenu(false)} >{data.aboutPage}</Link></li>
                    <li>
                        <span className="dropdown-mobile-link" onClick={e => setShowSubMenu(!showSubMenu)}>
                            <span>{data.menuServices}</span> 
                            <ExpandMoreIcon id="mobile-arrow" className={showSubMenu ? 'rotate' : '' } />
                        </span>
                        <div className={showSubMenu ? "dropdown-mobile show-dropdown-mobile" : "dropdown-mobile"}>
                            <ul>
                                <li><Link to="/services/strategy-marketing" onClick={() => setShowMenu(false)}>{data.service1}</Link></li>
                                <li><Link to="/services/commercial-prospecting" onClick={() => setShowMenu(false)}>{data.service5}</Link></li>
                                <li><Link to="/services/marketing-digital" onClick={() => setShowMenu(false)}>{data.service2}</Link></li>
                                <li><Link to="/services/graphic-design" onClick={() => setShowMenu(false)}>{data.service3}</Link></li>
                                <li><Link to="/services/developement" onClick={() => setShowMenu(false)}>{data.service4}</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to='/portfolio' onClick={() => setShowMenu(false)} >{data.portfolioPage}</Link></li>
                    <li><Link to='/contact' onClick={() => setShowMenu(false)} >{data.contactPage}</Link></li>
                    <li><Link to='/quote-quiz' onClick={() => setShowMenu(false)}><button className="mobile-menu-btn">{data.devisBtn}</button></Link></li>
                    <li className="menuLangs flex" onClick={() => setShowMenu(false)} >
                        <img src="/images/langs/en.png" alt="Lang" onClick={() => props.onSelectLang('en')} />
                        <img src="/images/langs/fr.png" alt="Lang" onClick={() => props.onSelectLang('fr')} />
                        {/* <img src="/images/langs/al.png" alt="Lang" onClick={() => props.onSelectLang('al')} /> */}
                        <img src="/images/langs/ar.png" alt="Lang" onClick={() => props.onSelectLang('ar')} />
                    </li>
                    <HighlightOffOutlinedIcon onClick={() => setShowMenu(false)} />
                </ul>
                <img src='/images/logo.png' alt="Logo" />
            </nav>
        </header>
    )
}
