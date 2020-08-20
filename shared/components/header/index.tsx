import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from "next/link";
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../../hooks/useTranslations";
import NavLink from "../NavLink";
import {linksStubs} from "shared/stubs/links.stubs";

interface Props {
}

const Header = (props: Props) => {
    const router = useRouter();
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
    const renderListItem = (item: { route: string | number | undefined; title: { [x: string]: any; }; }) => (
        <li className={style.nav_bar} key={item.route} dir={dir}>
            <NavLink route={item.route} as={item.route} label={item.title[locale]}/>
        </li>

    );
    const renderLabel = (name) => {
        const arr = linksStubs.filter(l => l.name === name);
        const label = arr[0];
        return label[locale];

    };

    return (

        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.nav_bar_container}`}>

                <a className={`navbar-brand`} href="#">
                    <span className={style.Pot}>Pot</span>
                    <span className={style.Pay}>Pay</span>
                </a>
                <div className={`${state.collapseClass} navbar-collapse navbar-nav`} id='navlinks'>
                    <ul className={`navbar-nav mr-auto ${style.nav_links_list}`}>
                        {
                            linksStubs.map(renderListItem)
                        }
                    </ul>
                <div className={style.nav_demo_btn_container}>
                    <button className={`btn btn-sm btn-outline-secondary ${style.nav_demo_btn} `}
                            type="submit">Request Demo
                    </button>
                </div>
            </div>
            <button
                type="button" onClick={handleMenuClick} className="navbar-toggler"
                data-toggle="collapse" data-target="#navlinks"
                aria-controls="navlinks" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon className={style.navbar__menuIcon} icon={faBars} size="1x"/>
            </button>
        </nav>

    );
};

export default Header;

/*<div>
        <nav className={`navbar navbar-expand-lg ${style.navbar}`} role="navigation">
            <Link href={`/${locale}/`}>
                <a className={style.navbar__logoContainer}>
                    <img className={style.navbar__logo} src="/favicon.png" alt="dimensions-logo"/>
                </a>
            </Link>
            <div className={`${state.collapseClass} navbar-collapse navbar-nav`} id='navlinks'>
                <ul className="navbar-nav mr-auto">
                    {
                        linksStubs.map(renderListItem)
                    }
                </ul>
            </div>
            <button
                type="button" onClick={handleMenuClick} className="navbar-toggler"
                data-toggle="collapse" data-target="#navlinks"
                aria-controls="navlinks" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon className={style.navbar__menuIcon} icon={faBars} size="2x"/>
            </button>
        </nav>
    </div>*/


/*<form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>*/


