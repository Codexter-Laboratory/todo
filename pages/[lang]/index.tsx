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
            <div className={style.div}>
                <Header/>
                <Paragraph>
                    <h3 className={style.paragraph_h3_1}>Say hello to Digital Receipts</h3>
                    <div>Unlock the power of your in-store data
                        by digitizing your customer's receipts</div>

                </Paragraph>
                <Footer/>

                <Service icon="assets/pic.ico" title="Identify and analyze customers"
                         description="get deep insights on customer profiles and purchasing behavior" subDescription='bla bla bla'/>
                <Form/>
                <Header/>
                <CardDeck>
                    <Cards title="01." description="Install PotPay's application on your POS terminal"
                           sub_description="No need for a new hardware a new EPOS system or EPOS integration"
                           icon="assets/pic.ico">
                    </Cards>
                </CardDeck>
            </div>
        </div>


    );
};

Home.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_home');
    let pageData = res.data;
    return {
        pageData
    };
}


export default withLocale(Home);
