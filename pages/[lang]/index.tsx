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
import Image from "../../shared/components/image";
import style from "../styles/style.module.scss"

interface Props {
    pageData: any;
}

const Home: NextPage<Props> = () => {
    const {locale} = useTranslation();

    return (
        <div className="page__container"  dir={locale === 'ar' ? 'rtl' : 'ltr'} >

            <Header></Header>

            <div className={'row'}>
                <div className="col-md-6 col-12">
                    <Cards title="01." description="Say hello to Digital Receipts"
                           sub_description="No need for a new hardware a new EPOS system or EPOS integration" icon="assets/ass.png"/>
                </div>
                <div className="col-md-6 col-12">
                     <Image image="assets/desktop-2.png"/>
                </div>
            </div>

            <CardDeck>
                <div className={'row'}>
                <div className="col-md-3 col-12">
                <Cards title="01." description="Install PotPay's application on your POS terminal"
                       sub_description="No need for a new hardware a new EPOS system or EPOS integration" icon="assets/ass.png"/>
                </div>
                <div className="col-md-3 col-12">
                    <Cards title="01." description="Install PotPay's application on your POS terminal"
                           sub_description="No need for a new hardware a new EPOS system or EPOS integration" icon="assets/ass.png"/>
                </div>
                <div className="col-md-3 col-12">
                    <Cards title="01." description="Install PotPay's application on your POS terminal"
                           sub_description="No need for a new hardware a new EPOS system or EPOS integration" icon="assets/ass.png"/>
                </div>
                <div className="col-md-3 col-12">
                    <Cards title="01." description="Install PotPay's application on your POS terminal"
                           sub_description="No need for a new hardware a new EPOS system or EPOS integration" icon="assets/ass.png"/>
                </div>
                </div>
            </CardDeck>

            {/*<Paragraph header="Say Hello to Digital Receipts" content="Unlock the power of your in-store data by digitizing your customer's receipts" subContent="PotPay" children=""/>*/}

            {/*<Service  icon="assets/pic.ico" title="Identify and analyze customers" description="get deep insights on customer profiles and purchasing behavior"/>*/}
            <div className="row">
                <div className="col-md-6 col-12">
                </div>
                <div className="col-md-6 col-6">
                    <Form/>
                </div>
            </div>
            <Footer></Footer>
        </div>


    );
};


export default withLocale(Home);
