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

interface Props {
    pageData: any;
}

const Home: NextPage<Props> = () => {
    const {locale} = useTranslation();

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'} >

            <Header></Header>

            <Paragraph header="Say Hello to Digital Receipts" content="Unlock the power of your in-store data by digitizing your customer's receipts" subContent="PotPay" children=""/>
            <Footer/>

            <Service  icon="assets/pic.ico" title="Identify and analyze customers" description="get deep insights on customer profiles and purchasing behavior"/>
            <Form/>
            <CardDeck>
                <Cards title="01." description="Install PotPay's application on your POS terminal"
                    sub_description="No need for a new hardware a new EPOS system or EPOS integration" icon="assets/ass.png"/>
            </CardDeck>


        </div>


    );
};


export default withLocale(Home);
