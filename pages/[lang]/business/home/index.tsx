import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import axios from "axios";
import {getPageData} from "helpers/queries";

interface Props {
    pageData: any;
}

const Home: NextPage<Props> = ({pageData}: Props) => {

    return(
        <></>
    );
}

Home.getInitialProps = async (ctx) => {

    let res = await Fetcher('page_home')
    {
        axios({
            url: 'http://localhost:1337/graphql',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                query: getPageData('page_home')
            })
        });
    }
    let pageData = res.data;
    return {
        pageData
    };
}

export default withLocale(Home);