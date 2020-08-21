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

interface Props {
    pageData: any;
    paragraphs: ParagraphModel[];
    consumers: CardDeckModel[];
}


const ConsumerHome: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {
                props.paragraphs ? props.paragraphs.map(item => {
                    return (
                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                   sub_description={item.subDescription[locale]}/>
                    )
                }) : null
            }
            {
                props.consumers && props.consumers.cards ?
                    <CardDeck>
                        {props.consumers.cards.map(item => {
                            return (
                                <Cards title={item.title[locale]} description={item.description[locale]}
                                       sub_description={item.subDescription[locale]} icon={item.image}/>
                            )
                        })}
                    </CardDeck> : null
            }
        </div>
    );
}

ConsumerHome.getInitialProps = async (ctx) => {

    let res = await Fetcher('page_consumer_home');

    let pageData = res.data.data.pages[0];
    let paragraphs;
    let consumers;

    return {
        pageData,
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        consumers: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'consumers')[0]),

    };
}

export default withLocale(ConsumerHome);