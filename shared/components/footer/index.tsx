import React from 'react';
import style from './style.module.scss';
import {businessFooterStubs} from 'shared/stubs/footer.labels.stubs'
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
            <ul className={style.listLinks}>
                {
                    businessFooterStubs.map(renderLinks)
                }
            </ul>
            <div>
                <div className={style.PP}>
                    © 2020 PotPay
                </div>
            </div>
        </footer>
    );
}
export default Footer;