import React from 'react';
import Link from "next/link";
import style from './style.module.scss';
import useTranslation from "hooks/useTranslations";
import {BusinessFooterStubs, ConsumerFooterStubs} from 'shared/stubs/footer.labels.stubs'
import {FooterLabelsInterface} from "shared/interfaces/footerLabels.interface";

interface Props {
    pageName: string;
}

const Footer = (props: Props) => {
    const {locale} = useTranslation();
    let renderLinks = (item: FooterLabelsInterface) => {
        return (
            <>
                {
                    item.name[locale] === "Careers" ?
                    <>
                        <li className={`${style.link2}`}>
                            <div className={style.footerElementContainer}>
                                <Link href={`/[lang]${item.route}`} as={`/${locale + item.route}`}>
                                   <a href={item.route} className={style.item}>{item.name[locale]}</a>
                                 </Link>
                            </div>
                        </li>
                    </>
                    :
                    <>
                        <li className={`${style.link}`}>
                            <div className={style.footerElementContainer}>
                                <Link href={`/[lang]${item.route}`} as={`/${locale + item.route}`}>
                                    <a href={item.route} className={style.item}>{item.name[locale]}</a>
                               </Link>
                            </div>
                        </li>
                    </>
                }

            </>
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
                            BusinessFooterStubs.map(renderLinks)
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
