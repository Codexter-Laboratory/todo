import React from "react";
import {NextPage} from "next";
import withLocale from "../../../hocs/withLocale";
import {Fetcher} from "../../../helpers/fetch";
import {ParagraphModel} from "../../../shared/interfaces/paragraph.interface";
import {CardDeckApiInterface, CardDeckModel} from "../../../shared/interfaces/card-deck.interface";
import CardDeck from "../../../shared/components/card-deck";
import Cards from "../../../shared/components/card";
import Paragraph from "../../../shared/components/paragraph";
import useTranslations from "../../../hooks/useTranslations";
import useTranslation from "../../../hooks/useTranslations";

interface Props {
    pageData: any;
    paragraphs: ParagraphModel[];
    services: CardDeckModel;
}

const OurStory: NextPage<Props> = (props: Props) => {
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

OurStory.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_ourStory');
    let pageData = res.data.data.pages[0];
    let paragraphs;
    let services;
    return {
        pageData,
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        services: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'services')[0])
    };
}

export default withLocale(OurStory);