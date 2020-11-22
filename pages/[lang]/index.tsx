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
            <div className={'row'}>

                <div className="col-md-6 col-12">
                    <Cards />
                </div>
                <div className={'col-md-6 col-12'}>
                </div>
            </div>
            <div className={`row`}>
                <div className={"col-md-6 col-12"}>

                    <CardDeck>
                        <div className={"row"}>
                            <div className={"col-md-6 col-12"}>
                                <Cards/>
                            </div>
                            <div className={"col-md-6 col-12"}>
                                <Cards/>
                            </div>
                        </div>
                    </CardDeck>

                </div>
                <div className={"col-md-6 col-12"}>
                    <Paragraph/>
                </div>
            </div>
            <div className={`row`}>
                <LogoDeck/>
                <div className="col-md-6 col-12">
                    <div className={"row"}>
                        <LogoDeck/>
                    </div>
                </div>
            </div>
            <div className={`row`}>
                <div className="col-md-6 col-12">
                    <Contact/>
                </div>
                <div className="col-md-6 col-12">
                    <Form/>
                </div>
            </div>
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
