import React from 'react';
import {NextPage} from "next";
import useTranslation from 'hooks/useTranslations';
import withLocale from "hocs/withLocale";
import Form from "shared/components/form";
import Cards from "shared/components/card";
import Footer from "shared/components/footer";
import Paragraph from "shared/components/paragraph";
import Service from "shared/components/service";
import CardDeck from "shared/components/card-deck";
import Header from "../../shared/components/header";
import style from './style.module.scss';
import {Fetcher} from "../../helpers/fetch";

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
