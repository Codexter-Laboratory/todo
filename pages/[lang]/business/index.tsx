import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import useTranslation from "hooks/useTranslations";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import Cards from "shared/components/card";
import CardDeck from "shared/components/card-deck";
import Paragraph from "shared/components/paragraph";
import {ParagraphModel} from "shared/interfaces/paragraph.interface";
import Service from "shared/components/service";
import {PageNames} from 'shared/enums/page-names.enum'
import {ServicePageLayout} from "shared/components/pageLayout";
import {LabelsStubs} from "shared/stubs/labels.stubs";
import style from './style.module.scss';
import Contact from "shared/components/contact-info";
import Form from "shared/components/form";
import LogoDeck from "shared/components/logo-deck";

interface Props {
    pageData: any;
    services: CardDeckModel[];
    paragraphs: ParagraphModel[];
    cards: CardDeckModel[];
    measurements: any;
}


const BusinessHome: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();

    const renderLabel = (title: string) => {
        const arr = LabelsStubs.filter(l => l.title === title);
        const label = arr[0];
        return label[locale];
    };

    return (
        <>
            <ServicePageLayout pageData={props.pageData}>
                <section className='page__intro_section'>
                    <div className={`col-12 col-md-6 ${style.page__left_section}`}>
                        <h2 className={style.page__intro_section_h2}>
                            Say Hello to
                        </h2>
                        <h1 className={style.page__intro_section_h1}>Digital Receipts</h1>
                        <p className={style.page__intro_section_paragraph}>Unlock the power of your in-store data by
                            digitizing
                            your customers receipts.</p>
                        <button className={`button-secondary`}>Request Demo</button>
                        <button className={`button-thirdly ${style.page__intro_section_button}`}>How It Works?</button>
                    </div>
                    <div className={`col-12 col-md-6 ${style.page__right_section}`}>
                        <img className={`${style.page__right_section_image}`} src='/assets/main-image.png'
                             alt='PotPay Main Image'/>
                    </div>
                </section>
                <section className={`page__first_section ${style.page__services_section}`} id='why'>
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
                <section id='how'>
                    {
                        props.cards && props.cards.cards ?
                            <CardDeck title='howItWorks'>
                                {props.cards.cards.map((item, i) => {
                                    return (
                                        i !== 1 ?
                                            <Cards title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]} icon={item.image}
                                                   number={renderLabel(`0${i + 1}.`)} key={i}/> :
                                            <Cards padding title={item.title[locale]}
                                                   description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]} icon={item.image}
                                                   number={renderLabel(`0${i + 1}.`)} key={i}/>
                                    )
                                })}
                            </CardDeck> : null
                    }
                </section>
                <section className='page__one_col_section'>
                    <button className='button-primary'>Book a Demo</button>
                </section>
                <section className='page__two_col_section'>
                    <div className={`col-12 col-md-6`}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Data Privacy and Security').map(item => {
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}>

                                        </Paragraph>
                                    )
                                })
                                : null
                        }
                    </div>
                    <div className={`col-12 col-md-6 ${style.page__right_section}`}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Data Privacy and Security').map(item => {
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}/>
                                    )
                                })
                                : null
                        }
                    </div>
                </section>
                <section className='page__two_col_section'>
                    <div className={`col-12 col-md-6 ${style.page__small_cards_container}`}>
                        {
                            props.measurements ? props.measurements.cards.map(card => {
                                    return (
                                        <div className={style.page__small_cards}>
                                            <h1>{card.title[locale]}</h1>
                                            <p>{card.description[locale]}</p>
                                        </div>
                                    )
                                })
                                : null
                        }
                    </div>
                    <div className={`col-12 col-md-6 ${style.page__right_section}`}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Did you know?').map(item => {
                                    console.log('res')
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}/>
                                    )
                                })
                                : null
                        }
                        <button className='button-primary'>Get In Touch</button>
                    </div>
                </section>
            </ServicePageLayout>
            <section className='page__two_col_section_grey'>
                <div className={`col-12 col-md-6 ${style.page__left_section}`}>
                    <LogoDeck logo_1="/assets/500-logo.jpg" logo_2="/assets/flat6labs-logo.png" title={"Funded by"}/>
                </div>
                <div className={`col-12 col-md-6 ${style.page__right_section_margin}`}>
                    <LogoDeck logo_1="/assets/arabnet-logo.png" logo_2="/assets/berytech-logo.png"
                              title={"Featured in"}/>
                </div>
            </section>
            <section className='page__two_col_section_contact_container'>
                <h1 className={`page__intro_section_h1 ${style.page_contact_let}`}>Let's Talk</h1>
                <section className='page__two_col_section_contact'>
                    <div className={`col-12 col-md-6 ${style.page__left_section}`}>
                        <Contact/>
                    </div>
                    <div className={`col-12 col-md-6 ${style.page__right_section_margin}`}>
                        <Form/>
                    </div>
                </section>
            </section>
        </>
    );
}

BusinessHome.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_business_home);

    let pageData;

    pageData = res.data.data.pages[0];

    if (pageData) {
    }

    return {
        pageData,
        services: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'services')[0]),
        cards: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'cards')[0]),
        measurements: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'measurements')[0]),
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
    };
}

export default withLocale(BusinessHome);
