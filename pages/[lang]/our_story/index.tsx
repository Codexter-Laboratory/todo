import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import {ParagraphModel} from "shared/interfaces/paragraph.interface";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import CardDeck from "shared/components/card-deck";
import Cards from "shared/components/card";
import Paragraph from "shared/components/paragraph";
import useTranslation from "hooks/useTranslations";
import {PageNames} from "../../../shared/enums/page-names.enum";

interface Props {
    pageData: any;
    paragraphs: ParagraphModel[];
    members: CardDeckModel;
}

const OurStory: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
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

            {props.paragraphs.map(item => {
                return (
                    <Paragraph title={item.title[locale]} description={item.description[locale]}
                               sub_description={item.subDescription[locale]}/>
                )
            })}
        </div>
    );
}
OurStory.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_our_story);
    let pageData = res.data.data.pages[0];
    let paragraphs;
    let members;
    return {
        pageData,
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        members: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'members')[0])
    };
}

export default withLocale(OurStory);
