import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import CardDeck from "shared/components/card-deck";
import Cards from "shared/components/card";
import useTranslation from "hooks/useTranslations";
import {PageNames} from "../../../shared/enums/page-names.enum";
import Service from "../../../shared/components/service";
import {ArticlesApiInterface} from "../../../shared/interfaces/articles.interface";

interface Props {
    pageData: any;
    services: CardDeckModel;
}

const Press: NextPage<Props> = (props: Props) => {

    const {locale} = useTranslation();

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <CardDeck>
                {/*{props.services.cards.map(item => {*/}
                {/*    return (*/}
                {/*        <Service icon={item.image} title={item.title[locale]} description={item.description[locale]}*/}
                {/*                 subDescription={item.subDescription[locale]}>*/}

                {/*        </Service>*/}
                {/*    )*/}
                {/*})}*/}
            </CardDeck>
        </div>
    );
}

Press.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_press);
    let pageData = res.data.data.pages[0];
    let services;
    return {
        pageData,
        // articles: new CardDeckModel(pageData.article.filter((c: ArticlesApiInterface) => c.name === 'articles')[0])
    };
}

export default withLocale(Press);

