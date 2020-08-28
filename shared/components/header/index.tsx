import React, {useState} from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import useTranslation from "hooks/useTranslations";
import NavLink from "../NavLink";
import {BusinessLinksStubs} from "shared/stubs/header.links.stubs";
import {NavLinksInterface} from "shared/interfaces/NavLinkInterface";
import Link from "next/dist/client/link";
import {ConsumerLinksStubs} from "shared/stubs/header.links.stubs.2";

interface Props {
    pageName: string;
}

const Header = (props: Props) => {
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
        props.pageName === 'page_consumer_home' ? <>
        <li className={style.nav_bar_consumer} key={item.route} dir={dir}>
            <NavLink route={item.route} as={item.route} label={item.title[locale]}/>
        </li>
        </> : <> <li className={style.nav_bar} key={item.route} dir={dir}>
            <NavLink route={item.route} as={item.route} label={item.title[locale]}/>
        </li>
        </>

    );

        return(
        <nav style={{ transition: '1s ease' }} className={`navbar navbar-expand-lg ${style.nav_bar_container}`}>
            {
                props.pageName === 'page_consumer_home' ? <>
                    <Link href={`/${locale}`}>
                        <a className={`navbar-brand`}>
                            <span className={`${style.Pot} font-family--logo`}>Pot</span>
                            <span className={`${style.pay_consumer} font-family--logo`}>Pay</span>
                        </a>
                    </Link>
                    <div className={`${state.collapseClass} navbar-collapse navbar-nav`} id='navlinks'>
                        <ul className={`navbar-nav mr-auto ${style.nav_links_list}`}>
                            {
                                ConsumerLinksStubs.map(renderListItem)
                            }
                        </ul>
                    </div>
                    <button onClick={handleMenuClick} className="navbar-toggler">
                        <FontAwesomeIcon className={style.navbar__menuIcon} icon={faBars} size="1x"/>
                    </button>
                </> : <>
                    <Link href={`/${locale}`}>
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
                </>
            }

        </nav>

    );
};

export default Header;

