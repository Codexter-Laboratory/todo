import React from 'react';
import 'framework/framework.scss';
import {LocaleProvider} from "../context/LocaleContext";
import useTranslation from "../hooks/useTranslations";
import {PageTransition} from 'next-page-transitions';

const PotPayApp = ({Component, pageProps}) => {
    const {locale} = useTranslation();

    return (
        <LocaleProvider lang={locale}>
            <PageTransition timeout={300} classNames="page-transition">
                <Component {...pageProps} />
            </PageTransition>
        </LocaleProvider>
    );
}

PotPayApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
};

//Added by Hassan for the form submission


export default PotPayApp;
