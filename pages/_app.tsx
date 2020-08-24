import React, {useEffect, useState} from 'react';
import 'framework/framework.scss';
import {LocaleProvider} from "../context/LocaleContext";
import useTranslation from "../hooks/useTranslations";
import {PageTransition} from 'next-page-transitions';
import {useRouter} from "next/router";
import Header from "shared/components/header";
import Footer from "../shared/components/footer";

const PotPayApp = ({Component, pageProps}) => {
    const {locale} = useTranslation();
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    useEffect(() => {
        const handleStart = (url) => (url !== router.pathname);
        const handleComplete = (url) => (url !== router.pathname);
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        }
    });

    return (
        <LocaleProvider lang={locale}>
            <div className={loading ? 'app-container--loading' : ''}>
                {/*<Header/>*/}
                <PageTransition timeout={300} classNames="page-transition">
                    <Component {...pageProps} />
                </PageTransition>
                {/*<Footer/>*/}
            </div>
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


export default PotPayApp;
