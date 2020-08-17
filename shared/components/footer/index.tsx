import React from 'react';
import style from './style.module.scss';
import {businessStubs} from '../../stubs/footerLabels.stubs'
import useTranslation from "hooks/useTranslations";
const Footer = () => {
    const {locale} = useTranslation();
    let renderLinks = (item: { route: string | undefined; name: { [x: string]: React.ReactNode; }; }) => {
        return (
            <li className={style.link}><a href={item.route}>{item.name[locale]}</a></li>
        )
    }
    return (
        <footer className={style.footer_container} >
            <ul className={style.listLinks}>
                {
                    businessStubs.map(renderLinks)
                }
                <a className={style.PP}>
                    @ 2020 PotPay
                </a>
            </ul>
        </footer>
    );
}
export default Footer;