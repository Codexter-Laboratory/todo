import React from 'react';
import style from 'style.module.scss';
import {businessFooterStubs} from 'shared/stubs/footerLabels.stubs'
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
                    businessFooterStubs.map(renderLinks)

                }
                <div className={style.PP}>
                    @ 2020 PotPay
                </div>
            </ul>
        </footer>
    );
}

export default Footer;