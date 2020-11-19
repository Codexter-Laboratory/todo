import React from 'react';
import {NextPage} from "next";
import useTranslation from 'hooks/useTranslations';
import withLocale from "hocs/withLocale";
import Cards from "shared/components/card";
import LogoDeck from "shared/components/logo-deck";
import CardDeck from "shared/components/card-deck";
import Contact from "shared/components/contact-info";
import Form from "shared/components/form";
import Paragraph from "shared/components/paragraph";

interface Props {
    pageData: any;
}

const Home: NextPage<Props> = () => {
    const {locale} = useTranslation();

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        </div>
    );
};

Home.getInitialProps = async (ctx) => {
    let pageData = {};
    return {
        pageData
    };
}

export default withLocale(Home);
