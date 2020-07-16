import React from 'react';
import {NextPage} from "next";

import useTranslation from 'hooks/useTranslations';
import withLocale from "hocs/withLocale";

interface Props {

}

const Home: NextPage<Props> = () => {
    const {locale} = useTranslation();

    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>

        </div>
    );
};

export default withLocale(Home);
