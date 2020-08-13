import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";


interface Props {
    pageData: any;
}

const Home: NextPage<Props> = ({pageData}: Props) => {
    console.log(pageData);
    return(
        <></>
    );
}

Home.getInitialProps = async (ctx) => {

    let res = await Fetcher('page_home');

    let pageData = res.data;

    return {
        pageData
    };
}

export default withLocale(Home);