import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import {ParagraphModel} from "shared/interfaces/paragraph.interface";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import Paragraph from "shared/components/paragraph";
import useTranslation from "hooks/useTranslations";
import {PageNames} from "shared/enums/page-names.enum";
import style from "./style.module.scss"
import {ServicePageLayout} from "shared/components/pageLayout";
import LogoDeck from "shared/components/logo-deck";
import CardDeck from "shared/components/card-deck";
import Service from "shared/components/service";

interface Props {
    pageData: any;
    paragraphs: ParagraphModel[];
    members: CardDeckModel;
}

const OurStory: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    return (
        <>
            <ServicePageLayout pageData={props.pageData}>
                <section className='page__two_col_section'>
                    <div className={`col-6 col-md-6 ${style.page__left_section}`}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Our Story').map(item => {
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}/>
                                    )
                                })
                                : null
                        }
                    </div>
                    <div className={`col-12 col-md-6`}>
                        <img className={`${style.page__right_section_image}`} src=''
                             alt='PotPay Main Image'/>
                    </div>
                </section>
                <section className='page__two_col_section'>
                    <div className={`col-6 col-md-6`}>
                    </div>
                    <div className={`col-6 col-md-6 ${style.page__right_section}`}>
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Our Mission').map(item => {
                                    console.log('res')
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}>
                                        </Paragraph>
                                    )
                                })
                                : null
                        }
                        {
                            props.paragraphs ?
                                props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Vision').map(item => {
                                    console.log('res')
                                    return (
                                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                                   sub_description={item.subDescription[locale]}>
                                        </Paragraph>
                                    )
                                })
                                : null
                        }
                    </div>
                </section>
                <section className='page__two_col_section'>
                    {
                        props.members ?
                            <CardDeck title='members'>
                                {
                                    props.members.cards.map((item) => {
                                        return (
                                            <Service icon={item.image} title={item.title[locale]}
                                                     description={item.description[locale]}/>
                                        )
                                    })
                                }
                            </CardDeck> : null
                    }
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
        </>
    );
}
OurStory.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_our_story);
    let pageData;

    pageData = res.data.data.pages[0];

    return {
        pageData,
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        members: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'members')[0])
    };
}

export default withLocale(OurStory);
