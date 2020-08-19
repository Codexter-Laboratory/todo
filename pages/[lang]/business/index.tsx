import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import useTranslation from "../../../hooks/useTranslations";
import {CardDeckModel, CardDeckApiInterface} from "../../../shared/interfaces/card-deck.interface";
import Cards from "../../../shared/components/card";
import CardDeck from "../../../shared/components/card-deck";
import Paragraph from "../../../shared/components/paragraph";
import {ParagraphApiInterface, ParagraphModel} from "../../../shared/interfaces/paragraph.interface";


interface Props {
    pageData: any;
    services: CardDeckModel;
    paragraphs: ParagraphModel[];

}

const Home: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    console.log(props.paragraphs, 'j')
    console.log(props.services, 'k')

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <CardDeck>
                {props.services.cards.map(item => {
                    return (
                        <Cards title={item.title[locale]} description={item.description[locale]}
                               sub_description={item.subDescription[locale]}
                               icon={item.image}/>
                    )
                })}
            </CardDeck>
            <div>
                {props.paragraphs.map(item => {
                    return(
                        <Paragraph>
                            <h4>{item.title[locale]}</h4>
                            <p>{item.description[locale]}</p>
                            <p>{item.subDescription[locale]}</p>
                        </Paragraph>
                    )
                })}
            </div>
        </div>
    );
}

Home.getInitialProps = async (ctx) => {

    let res = await Fetcher('page_home');

    let pageData = res.data.data.pages[0];
    let services;
    let paragraphs;

    return {
        pageData,
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        services: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'services')[0])

    };
}

export default withLocale(Home);