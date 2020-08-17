import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import useTranslation from "../../../hooks/useTranslations";
import {getPageData} from "../../../helpers/queries";
import {CardDeckModel, CardDeckApiInterface} from "../../../shared/interfaces/card-deck.interface";
import {CardModel} from "../../../shared/interfaces/card.interface";
import Cards from "../../../shared/components/card";
import CardDeck from "../../../shared/components/card-deck";


interface Props {
    pageData: any;
    cardGroups: any;
    services: CardDeckModel;
    cards: CardDeckModel;
}

const Home: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    // console.log(props.pageData, 'hasan')
    //
    console.log(props.cardGroups)

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <CardDeck>
                {props.services.cards.map(item => {
                    return (
                        <Cards title={item.title[locale]} description={item.description[locale]} sub_description={}
                               icon={item.image}/>
                    )
                })}
            </CardDeck>
        </div>

    );
}

Home.getInitialProps = async (ctx) => {

    let res = await Fetcher('page_home');

    let pageData = res.data.data.pages[0];

    let services;
    services = pageData.card_groups;

    let cards;
    cards = pageData.cards;

    return {
        pageData,
        cardGroups,
        services,
        cards
    };
}

export default withLocale(Home);