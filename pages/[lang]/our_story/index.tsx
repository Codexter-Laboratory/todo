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
    ourParagraph: ParagraphModel[];
    members: CardDeckModel;
}

const OurStory: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    console.log(props.ourParagraph)
    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <CardDeck>
                {props.members.cards.map(item => {
                    return (
                        <Cards title={item.title[locale]} description={item.description[locale]}
                               sub_description={item.subDescription[locale]} icon={item.image}/>
                    )
                })}
            </CardDeck>
            {props.ourParagraph.map(item => {
                return (
                    <Paragraph title={item.title[locale]} description={item.description[locale]}
                               sub_description={item.subDescription[locale]}/>
                )
            })}
        </div>
    );
}
OurStory.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_ourStory');
    let pageData = res.data.data.pages[0];
    let ourParagraph;
    let members;
    return {
        pageData,
        ourParagraph: pageData.ourParagraph.map(paragraph => new ParagraphModel(paragraph)),
        members: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'members')[0])
    };
}

export default withLocale(OurStory);