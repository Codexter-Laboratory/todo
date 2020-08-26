import React from 'react';
import style from './style.module.scss';
import {businessFooterStubs} from 'shared/stubs/footer.labels.stubs'
import useTranslation from "hooks/useTranslations";
import Link from "next/link";
import {LabelsInterface} from "shared/interfaces/labels.interface";
import {ConsumerFooterStubs} from "shared/stubs/footer.labels.stubs.2";

interface Props {
    pageName: string;
}

const Footer = (props: Props) => {
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
            {
                props.pageName === 'page_consumer_home' ? <>
                    <ul className={`row ${style.listLinks}`}>
                        {
                            ConsumerFooterStubs.map(renderLinks)
                        }
                    </ul>
                    <div>
                        <div className={style.PP}>
                            © 2020 PotPay
                        </div>
                    </div>
                </> : <>
                    <ul className={`row ${style.listLinks}`}>
                        {
                            businessFooterStubs.map(renderLinks)
                        }
                    </ul>
                    <div>
                        <div className={style.PP}>
                            © 2020 PotPay
                        </div>
                    </div>
                </>
            }
        </footer>
    );
}
export default Footer;