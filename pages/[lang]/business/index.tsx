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

interface Props {
    pageData: any;
    services: CardDeckModel[];
    paragraphs: ParagraphModel[];
    cards: CardDeckModel[];
}


const BusinessHome: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();

    return (
        <ServicePageLayout pageData={props.pageData}>
            <section id='why'>
                {
                    props.services && props.services.cards ?
                        <CardDeck title='Why PotPay?'>
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
                    <CardDeck title='How It Works?'>
                        {props.cards.cards.map((item, i) => {
                            return (
                                i !== 1?
                                <Cards title={item.title[locale]} description={item.description[locale]}
                                       sub_description={item.subDescription[locale]} icon={item.image} number={`0${i+1}.`} key={i}/>:
                                    <div style={{'margin-top': '2%'}}>
                                        <Cards title={item.title[locale]} description={item.description[locale]}
                                               sub_description={item.subDescription[locale]} icon={item.image} number={`0${i+1}.`} key={i}/>
                                    </div>
                            )
                        })}
                    </CardDeck> : null
            }
            </section>
            {/*{*/}
            {/*    props.paragraphs ? props.paragraphs.map(item => {*/}
            {/*        return (*/}
            {/*            <Paragraph title={item.title[locale]} description={item.description[locale]}*/}
            {/*                       sub_description={item.subDescription[locale]}/>*/}
            {/*        )*/}
            {/*    }) : null*/}
            {/*}*/}
        </ServicePageLayout>
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
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
    };
}

export default withLocale(BusinessHome);
