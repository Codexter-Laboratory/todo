import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import {ParagraphModel} from "shared/interfaces/paragraph.interface";
import useTranslation from "hooks/useTranslations";
import Paragraph from "shared/components/paragraph";
import CardDeck from "shared/components/card-deck";
import Cards from "shared/components/card";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import {PageNames} from "shared/enums/page-names.enum";
import Service from "shared/components/service";
import {ServicePageLayout} from "shared/components/pageLayout";
import file from "public/assets";
import style from "./style.module.scss";

interface Props {
    pageData: any;
    services: CardDeckModel[];
    paragraphs: ParagraphModel[];
    cards: CardDeckModel[];
}

const ConsumerHome: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();

    return (
        <ServicePageLayout pageData={props.pageData}>
            <section className='page__intro_section'>
                <div className={`col-12 col-md-6 ${style.page__left_section}`}>
                    <h2 className={style.page__intro_section_h2}>
                        Join the 1,000,000+
                    </h2>
                    <h1 className={style.page__intro_section_h1}>Who digitized<br/> their paper receipts</h1>
                    <p className={style.page__intro_section_paragraph}><br/><br/><br/><br/>Get started by downloading the app!</p>
                    <p className={style.page__intro_section_paragraph}> Available for iOS & Android</p>

                    <button className={style.page__intro_section_button}>
                        <img className={style.btn_image} src="/icons/app-store.png"/>
                    </button>
                    <button className={style.page__intro_section_button}>
                        <img className={style.btn_image} src="/icons/google-store.png"/>
                    </button>
                </div>
                <div className={`col-12 col-md-6 ${style.page__right_section}`}>
                    <img className={`${style.page__right_section_image}`} src='/assets/main-image.png'
                         alt='PotPay Main Image'/>
                </div>
            </section>
            <section id='why'>
                {
                    props.services && props.services.cards ?
                        <CardDeck title='whyPotPay'>
                            {
                                props.services.cards.map(item => {
                                    return (
                                        <Service icon={item.image} title={item.title[locale]}
                                                 description={item.description[locale]}
                                                 subDescription={item.subDescription[locale]}/>
                                    )
                                })
                            }
                        </CardDeck> : null
                }
            </section>
            <section>
                <h1 className={style.section_title}>Key Features</h1>
            <section className={style.section_container}>
            <div className="col-12 col-md-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {
                    props.paragraphs ?
                        props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Your receipts automatically stored in one place').map(item => {
                        return (
                            <Paragraph title={item.title[locale]} description={item.description[locale]}
                                       sub_description={item.subDescription[locale]} children={""}/>
                        )
                    }) : null
                }
            </div>
                <div className='col-md-6 col-12'>
                   <img src="500-logo.jpg"/>
                </div>

                {/*{*/}
                {/*    props.cards && props.cards.cards ?*/}
                {/*        <CardDeck>*/}
                {/*            {props.cards.cards.map(item => {*/}
                {/*                return (*/}
                {/*                    <Cards title={item.title[locale]} description={item.description[locale]}*/}
                {/*                           sub_description={item.subDescription[locale]} icon={item.image}/>*/}
                {/*                )*/}
                {/*            })}*/}
                {/*        </CardDeck> : null*/}
                {/*}*/}
            </section>
            <section className={style.section_container}>
                <div className='col-md-6 col-12' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    <img className={style.page__left_section} src="500-logo.jpg"/>
                </div>
                    <div className={`col-md-6 col-12 ${style.page__right_section}`}>

                    {
                        props.paragraphs ?
                            props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Track your budget').map(item =>{
                            return (
                                <Paragraph title={item.title[locale]} description={item.description[locale]}
                                           sub_description={item.subDescription[locale]}/>
                            )
                        }) : null
                    }
                    </div>
            </section>
            <section className={style.section_container}>
                <div className='col-md-6 col-12' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {
                        props.paragraphs ?
                            props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Identify & monitor your spending habits').map(item =>{
                                return (
                                    <Paragraph title={item.title[locale]} description={item.description[locale]}
                                               sub_description={item.subDescription[locale]}/>
                                )
                            }) : null
                    }
                </div>
                <div className='col-md-6 col-12'>
                    <img src="500-logo.jpg"/>
                </div>
            </section>
            </section>
            <section>
                <h1 className={style.section_title}>PotPay Retailers</h1>
            </section>
                <section className={style.section_container}>
                    <div className='col-md-6 col-12'>
                        <img src="500-logo.jpg"/>
                    </div>
                    <div className='col-md-6 col-12' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === "Data privacy & security").map(item =>{
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}/>
                                    )
                                }) : null
                        }
                    </div>
                </section>
        </ServicePageLayout>
    );
}

ConsumerHome.getInitialProps = async (ctx) => {

    let res = await Fetcher(PageNames.page_consumer_home);

    let pageData = res.data.data.pages[0];
    let paragraphs;
    let consumers;

    return {
        pageData,
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        services: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'services_consumer')[0]),
        //consumers: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'consumers')[0]),
    };
}

export default withLocale(ConsumerHome);