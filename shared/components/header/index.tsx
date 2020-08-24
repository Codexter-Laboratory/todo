import React, {useState} from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import useTranslation from "hooks/useTranslations";
import NavLink from "../NavLink";
import {BusinessLinksStubs} from "shared/stubs/header.links.stubs";
import {NavLinksInterface} from "shared/stubs/nav-links-interface";
import Link from "next/dist/client/link";

const Header = () => {
    const {locale} = useTranslation();

    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const [state, setState] = useState({
        menuOpened: false,
        collapseClass: 'collapse',
    });

    const handleMenuClick = () => {
        let {menuOpened} = state;
        if (!menuOpened) {
            setState({
                ...state,
                collapseClass: 'collapse show',
                menuOpened: true
            });
        } else {
            setState({
                ...state,
                collapseClass: 'collapse',
                menuOpened: false
            });
        }
    };
    const renderListItem = (item: NavLinksInterface) => (
        <li className={style.nav_bar} key={item.route} dir={dir}>
            <NavLink route={item.route} as={item.route} label={item.title[locale]}/>
        </li>

    );

    return (
        <nav className={`navbar navbar-expand-lg ${style.nav_bar_container}`}>
            <Link href={`${locale}/`}>
                <a className={`navbar-brand`}>
                    <span className={`${style.Pot} font-family--logo`}>Pot</span>
                    <span className={`${style.Pay} font-family--logo`}>Pay</span>
                </a>
            </Link>
            <div className={`${state.collapseClass} navbar-collapse navbar-nav`} id='navlinks'>
                <ul className={`navbar-nav mr-auto ${style.nav_links_list}`}>
                    {
                        BusinessLinksStubs.map(renderListItem)
                    }
                </ul>
                <div className={style.nav_demo_btn_container}>
                    <button className={`button-primary`} type="submit">
                        Request Demo
                    </button>
                </div>
            </div>
            <button onClick={handleMenuClick} className="navbar-toggler">
                <FontAwesomeIcon className={style.navbar__menuIcon} icon={faBars} size="1x"/>
            </button>
        </nav>

    );
};

export default Header;

