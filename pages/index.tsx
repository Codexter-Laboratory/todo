import React, {useEffect} from 'react';
import Head from 'next/head';
import { getInitLocale } from 'translations/getInitLocale';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace(`/${getInitLocale()}`).then(res => res);
    });
    return (
        <Head>
            {/*To not Index the page on search engine*/}
            <meta name="robots" content="noindex, nofollow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/favicon.png" />
            <title>Pot Pay</title>
        </Head>
    );
};

export default Index;
