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
import img from "public/assets";

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
            <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {
                    props.paragraphs ? props.paragraphs.map(item => {
                        return (
                            <Paragraph title={item.title[locale]} description={item.description[locale]}
                                       sub_description={item.subDescription[locale]}/>
                        )
                    }) : null
                }
                <img src="500-logo.jpg"/>
                {

                }
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
            </div>
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