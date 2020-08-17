import React from 'react';
import style from './style.module.scss';
import {businessStubs} from '../../stubs/footerLabels.stubs'
import useTranslation from "hooks/useTranslations";

const Footer = () => {
    const {locale} = useTranslation();
    let renderLinks = (item) => {
        return (
            <li className={style.link}><a href={item.route}>{item.name[locale]}</a></li>
        )
    }
    return (
        <footer className={style.footerDiv}>
            <ul className={style.listLinks}>
                {
                    businessStubs.map(renderLinks)

                }
                <div className={style.PP}>
                    @ 2020 PotPay
                </div>
            </ul>
        </footer>
    );
}

export default Footer;

// <div className={style.Footer}>
//     <h4>Customers</h4>
// </div>
// <div className={style.dash1}>
//     <h4>|</h4>
// </div>
//
// <div className={style.Footer}>
//     <h4>Our Story</h4>
// </div>
//
// <div className={style.dash2}>
//     <h4>|</h4>
// </div>
//
// <div className={style.Footer}>
//     <h4>Press</h4>
// </div>
//
// <div className={style.dash3}>
//     <h4>|</h4>
// </div>
//
// <div className={style.Footer}>
//     <h4>Privacy Policy</h4>
// </div>
//
// <div className={style.dash4}>
//     <h4>|</h4>
// </div>
// <div className={style.Footer}>
//     <h4>Careers</h4>
// </div>
//
