import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.replace(`/`);
    });
    return (
        <Head>
            {/*To not Index the page on search engine*/}
            <meta name="robots" content="noindex, nofollow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/favicon.png" />
        </Head>
    );
};

export default Index;
