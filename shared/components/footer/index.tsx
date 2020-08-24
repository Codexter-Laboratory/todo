import React from 'react';
import style from './style.module.scss';
import {businessFooterStubs} from 'shared/stubs/footerLabels.stubs'
import useTranslation from "hooks/useTranslations";
import Link from "next/link";
import {FooterLabelsInterface} from "shared/interfaces/labels.interface";

const Footer = () => {
    const {locale} = useTranslation();
    let renderLinks = (item: FooterLabelsInterface) => {
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
                    businessFooterStubs.map(renderLinks)

                }
              <div className="row">
                <div className={style.PP}>
                    @ 2020 PotPay
                </div>
              </div>
            </ul>
        </footer>
    );
}
export default Footer;
