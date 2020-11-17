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
                    <Cards title="01." description="Say hello to Digital Receipts"
                           sub_description="No need for a new hardware a new EPOS system or EPOS integration"
                           icon="assets/ass.png"/>
                </div>
                <div className={'col-md-6 col-12'}>
                </div>
            </div>
            <div className={`row`}>
                <div className={"col-md-6 col-12"}>

                    <CardDeck>
                        <div className={"row"}>
                            <div className={"col-md-6 col-12"}>
                                <Cards title={"Hey"} description={"Im here"} sub_description={"talk to the world"}
                                       icon={"#"}/>
                            </div>
                            <div className={"col-md-6 col-12"}>
                                <Cards title={"hello"} description={"world"} sub_description={"sup"} icon={"#"}/>
                            </div>
                        </div>
                    </CardDeck>

                </div>
                <div className={"col-md-6 col-12"}>
                    <Paragraph header="Say Hello to Digital Receipts"
                               content="Unlock the power of your in-store data by digitizing your customer's receipts"
                               subContent="PotPay" children=""/>
                </div>
            </div>
            <div className={`row`}>
                <LogoDeck logo_1="/assets/500-logo.jpg" logo_2="/assets/flat6labs-logo.png" title={"Funded by"}/>
                <div className="col-md-6 col-12">
                    <div className={"row"}>
                        <LogoDeck logo_1="assets/arabnet-logo.png" logo_2="assets/berytech-logo.png"
                                  title={"Featured in"}/>
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
