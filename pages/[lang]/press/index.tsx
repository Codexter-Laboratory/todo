import React from "react";
import {NextPage} from "next";
import withLocale from "../../../hocs/withLocale";
import {Fetcher} from "../../../helpers/fetch";
import {CardDeckApiInterface, CardDeckModel} from "../../../shared/interfaces/card-deck.interface";
import CardDeck from "../../../shared/components/card-deck";
import Cards from "../../../shared/components/card";
import useTranslation from "../../../hooks/useTranslations";

interface Props {
    pageData: any;
    services: CardDeckModel;
}

const Press: NextPage<Props> = (props: Props) => {

    const {locale} = useTranslation();

    return(
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
        </div>
    );
}

Press.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_press');
    let pageData = res.data.data.pages[0];
    let services;
    return {
        pageData,
        services: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'services')[0])
        };
}

export default withLocale(Press);