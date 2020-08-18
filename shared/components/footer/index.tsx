import React from 'react';
import style from './style.module.scss';
import {businessStubs} from '../../stubs/footerLabels.stubs'
import useTranslation from "hooks/useTranslations";

const Footer = () => {
    const {locale} = useTranslation();
    let renderLinks = (item: { route: string | undefined; name: { [x: string]: React.ReactNode; }; }) => {
        return (
            <li className={`col-md-2 ${style.link}`}><a href={item.route}>{item.name[locale]}</a></li>
        )
    }
    return (
        <footer className={style.footer_container}>
            <ul className={`row ${style.listLinks}`}>
                {
                    businessStubs.map(renderLinks)
                }
            </ul>
            <div className="col-md-12">
                <a className={style.PP}>
                    @ 2020 PotPay
                </a>
            </div>

        </footer>
    );
}
export default Footer;