import React from 'react';
import {NextPage} from "next";
import useTranslation from 'hooks/useTranslations';
import withLocale from "hocs/withLocale";
import Form from "../../shared/components/form";
import Cards from "../../shared/components/card";
import Footer from "../../shared/components/footer";

interface Props {
    pageData: any;
}

const Home: NextPage<Props> = () => {
    const {locale} = useTranslation();

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <Form />
            <Cards title="ja3far" description="shi3e" sub_description="3aleh" icon="313"/>
        <Footer/>
        </div>

    );
};


export default withLocale(Home);
