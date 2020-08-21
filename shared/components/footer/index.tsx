import React from 'react';
import style from './style.module.scss';
import {businessStubs} from 'shared/stubs/footerLabels.stubs'
import useTranslation from "hooks/useTranslations";
import Link from "next/link";
import {LabelsInterface} from "shared/interfaces/labels.interface";

const Footer = () => {
    const {locale} = useTranslation();
    let renderLinks = (item: LabelsInterface) => {
        return (
            <li className={`col-md-2 ${style.link}`}>
                <Link href={`/[lang]${item.route}`} as={`/${locale + item.route}`}>
                    <a href={item.route}>{item.name[locale]}</a>
                </Link>
            </li>
        )
    }
    return (
        <footer className={style.footer_container}>
            <ul className={`row ${style.listLinks}`}>
                {
                    businessStubs.map(renderLinks)
                }
            </ul>
            <div className="row">
                <a className={style.PP}>
                    @ 2020 PotPay
                </a>
            </div>

        </footer>
    );
}
export default Footer;