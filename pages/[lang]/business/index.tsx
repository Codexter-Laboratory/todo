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

interface Props {
    pageData: any;
    services: CardDeckModel[];
    paragraphs: ParagraphModel[];
    cards: CardDeckModel[];
}


const BusinessHome: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {
                props.services && props.services.cards ?
                    <CardDeck>
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
            {
                props.cards && props.cards.cards ?
                    <CardDeck>
                        {props.cards.cards.map(item => {
                            return (
                                <Cards title={item.title[locale]} description={item.description[locale]}
                                       sub_description={item.subDescription[locale]} icon={item.image[0].file}/>
                            )
                        })}
                    </CardDeck> : null
            }
            {
                props.paragraphs ? props.paragraphs.map(item => {
                    return (
                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                   sub_description={item.subDescription[locale]}/>
                    )
                }) : null
            }
        </div>
    );
}

BusinessHome.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_business_home);

    let pageData;
    pageData = res.data.data.pages[0];

    return {
        pageData,
        services: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'services')[0]),
        cards: new CardDeckModel(pageData.card_groups.filter((d: CardDeckApiInterface) => d.name === 'cards')[0]),
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
    };
}

export default withLocale(BusinessHome);
