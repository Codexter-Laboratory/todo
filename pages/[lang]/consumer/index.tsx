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
    consumers: CardDeckModel[];
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
                    <div className={style.parent}>
                        <img className={style.image1} src='/assets/b2c-back.svg' alt='PotPay Main Image'/>
                        <img className={style.page__right_section_image} src='/assets/main-image-b2c.png' alt='PotPay Main Image'/>
                    </div>
                </div>
            </section>
            <div className={style.parent}>
                <img className={style.image2} src='/assets/whyPotPay-back.svg' alt='PotPay Main Image'/>
            <section id='why' className={style.section_positioning}>
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
            </div>
            <section>
                <h1 className={style.section_title}>Key Features</h1>
            <section className={style.section_container}>
            <div className="col-12 col-md-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {
                    props.paragraphs ?
                        props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Your receipts automatically stored in one place').map(item => {
                            return (
                                <div className={style.paragraph_container}>
                            <Paragraph title={item.title[locale]} description={item.description[locale]}
                                       sub_description={item.subDescription[locale]} children={""}/>
                                </div>
                        )
                    }) : null
                }
            </div>
                <div className={`col-md-6 col-12 ${style.parent}`}>
                    <img className={style.feature_img3} src='/assets/feature1-background.svg'/>
                    <img className={style.feature_img2} src='/assets/feature1-receipt.svg'/>
                    <img className={style.feature_img1} src='/assets/feature1.svg'/>
                </div>

                {/*{*/}
                {/*    props.cards && props.cards.cards ?*/}
                {/*        <CardDeck >*/}
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
                    <img className={style.image3} src='/assets/whyPotPay-back.svg'/>
                    <img className={style.image4} src='/assets/tracker-feature.svg'/>
                </div>
                    <div className={`col-md-6 col-12 ${style.page__right_section}`}>
                    {
                        props.paragraphs ?
                            props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Track your budget').map(item =>{
                                return (
                                    <div className={style.paragraph_container}>
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]} children={""}/>
                                    </div>
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
                                    <div className={style.paragraph_container}>
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]} children={""}/>
                                    </div>
                                )
                            }) : null
                    }
                </div>
                <div className='col-md-6 col-12'>
                    <img className={style.image5} src='/assets/whyPotPay-back.svg'/>
                    <img className={style.image4} src='/assets/spending-feature.svg'/>
                </div>
            </section>
            </section>
            <section>
                <h1 className={style.section_title}>PotPay Retailers</h1>
            </section>
                <section className={style.section_container}>
                    <div className={`col-md-6 col-12 ${style.parent}`}>
                        <img className={style.image7} src='/assets/privacy-b2c.svg'/>
                        <img className={style.image6} src='/assets/b2c-back.svg'/>
                    </div>
                    <div className='col-md-6 col-12' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === "Data privacy & security").map(item =>{
                                    return (
                                        <div className={style.paragraph_container}>
                                            <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                       sub_description={item.subDescription[locale]} children={""}/>
                                        </div>
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
        consumers: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'consumers')[0]),
    };
}

export default withLocale(ConsumerHome);