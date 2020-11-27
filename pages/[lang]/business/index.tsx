import React, {useRef} from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import useTranslation from "hooks/useTranslations";
import Cards from "shared/components/card";
import Service from "shared/components/service";
import CardDeck from "shared/components/card-deck";
import Paragraph from "shared/components/paragraph";
import {LabelsStubs} from "shared/stubs/labels.stubs";
import {PageNames} from 'shared/enums/page-names.enum'
import {ServicePageLayout} from "shared/components/pageLayout";
import {ParagraphModel} from "shared/interfaces/paragraph.interface";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import style from './style.module.scss';
import Contact from "shared/components/contact-info";
import Form from "shared/components/form";
import LogoDeck from "shared/components/logo-deck";
import Logo from "../../../shared/components/logo-deck/logo";

interface Props {
    pageData: any;
    services: CardDeckModel[];
    paragraphs: ParagraphModel[];
    cards: CardDeckModel[];
    otherCards: CardDeckModel[];
    measurements: CardDeckModel[];
}

const BusinessHome: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const howRef = useRef(null)
    const demoRef = useRef(null)
    const contactRef = useRef(null)
    const contactScroll = () => scrollToRef(contactRef)
    const howItWorksScroll = () => scrollToRef(howRef)
    const demoScroll = () => scrollToRef(demoRef)
    const renderLabel = (title: string) => {
        const arr = LabelsStubs.filter(l => l.title === title);
        const label = arr[0];
        return label[locale];
    };

    let renderOtherCard = (item, i: number) => <Cards title={item.title[locale]} description={item.description[locale]}
                                                      sub_description={item.subDescription[locale]} icon={item.image}
                                                      number={renderLabel(`0${i + 1}.`)} key={i}/>

    let renderOtherCardDecks = (item: CardDeckModel, i: number) => {
        return <CardDeck key={i}>
            {
                item.cards.map(renderOtherCard)
            }
        </CardDeck>
    }


    return (
        <>
            <ServicePageLayout pageData={props.pageData}>
                <section className='page__intro_section'>
                    <div className={`col-12 col-md-6 ${style.page__left_section}`}>
                        <h2 className={style.page__intro_section_h2}>
                            Say hello to
                        </h2>
                        <h1 className={style.page__intro_section_h1}>Digital Receipts</h1>
                        <p className={style.page__intro_section_paragraph}>Unlock the power of your in-store data by
                            digitizing <br/>
                            your customers receipts.</p>
                        <button className={`button-secondary ${style.page__intro_section_button}`}
                                onClick={demoScroll}>Request Demo
                        </button>
                        <button className={`button-thirdly ${style.page__intro_section_button}`}
                                onClick={howItWorksScroll}>How It Works?
                        </button>
                    </div>
                    <div className={`col-12 col-md-6 ${style.page__right_section}`}>
                        <img className={`${style.page__right_section_image}`} src='/assets/main-image.png'
                             alt='PotPay Main Image'/>
                    </div>
                </section>
                <section className={`page__first_section ${style.page__services_section}`} id='why'>

                    {
                        props.services && props.services.cards ?

                            <CardDeck title='whyPotPay' key='whyPotPay'>

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
                    <div className={style.overflow}>
                        <img className={style.image5} src='/assets/whyPotPay-back.svg'/>
                    </div>
                </section>
                <section className={style.page__card_section} id='how' ref={howRef}>
                    {
                        props.cards && props.cards.cards ?
                            <div className={style.cardHolder}>
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
                                </CardDeck>
                            </div> : null
                    }
                </section>
                <section className='page__one_col_section' onClick={demoScroll}>
                    <button className={`button-primary ${style.demo_button}`}>Book a Demo</button>
                </section>
                <section className={`page__two_col_section ${style.privacy_mobile}`}>
                    <div className={`col-md-8 col-12 ${style.parent}`}>
                        <img className={style.image6} src='/assets/b2c-back.svg'/>
                        <div className={style.privacy_image_container}/>
                        <img className={style.image7} src='/assets/privacy_policy_business.svg'/>

                    </div>
                    <div className={`col-12 col-md-4 ${style.par}`}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === "Data privacy & security").map(item => {
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
                            props.measurements ?
                                props.measurements.cards.map(card => {
                                    return (
                                        <div className={`${style.page__small_cards}`}>
                                            <h1 className={style.page__small_card_title}>{card.title[locale]}</h1>
                                            <p className={style.page__small_card_description}>{card.description[locale]}</p>
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
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}/>
                                    )
                                })
                                : null
                        }
                        <button className='button-primary' onClick={contactScroll}>Get In Touch</button>
                    </div>
                </section>
                <section>
                    {
                        props.otherCards.map(renderOtherCardDecks)
                    }
                </section>
            </ServicePageLayout>
            <section className='page__two_col_section_grey'>
                <div className={`col-12 col-md-6 ${style.page__partner_logos}`}>
                    <LogoDeck title={"Funded by"}>
                        <Logo source='/assets/500-logo.jpg' shape={1}/>
                        <Logo source='/assets/flat6labs-logo.png' shape={2}/>
                    </LogoDeck>
                </div>
                <div className={`col-12 col-md-6 ${style.page__partner_logos}`}>
                    <LogoDeck title={"Featured in"}>
                        <Logo source='/assets/arabnet-logo.png' shape={2}/>
                        <Logo source='/assets/berytech-logo.png' shape={2}/>
                    </LogoDeck>
                </div>
            </section>
            <section className='page__two_col_section_contact_container' id='contact' ref={contactRef}>
                <h1 className={`page__intro_section_h1 ${style.page_contact_let}`}>Let's Talk</h1>
                <section className='page__two_col_section_contact'>
                    <div className={`col-12 col-md-6 ${style.page__left_section}`}>
                        <Contact/>
                        <text className={style.potpay_opacity}>PotPay</text>
                    </div>
                    <div className={`col-12 col-md-6 ${style.page__right_section_margin}`} id="form" ref={demoRef}>
                        <Form/>
                    </div>
                </section>
            </section>
        </>
    );
}

BusinessHome.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_business_home);
    let pageData = res.data.data.pages[0];

    return {
        pageData,
        otherCards: pageData.card_groups.filter((c: CardDeckApiInterface) =>
            c.name !== 'services'
            &&
            c.name !== 'measurements'
            &&
            c.name !== 'cards'
        ).map(item => new CardDeckModel(item)),
        services: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'services')[0]),
        cards: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'cards')[0]),
        measurements: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'measurements')[0]),
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
    };
}

export default withLocale(BusinessHome);
