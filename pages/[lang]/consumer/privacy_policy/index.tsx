import React from "react";
import {NextPage} from "next";
import withLocale from "../../../../hocs/withLocale";
import {Fetcher} from "../../../../helpers/fetch";

interface Props {
    pageData: any;

}

const Privacy: NextPage<Props> = ({pageData}:Props) => {
    return (
        <></>
    );
}
Privacy.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_privacy');
    let pageData = res.data;
    return {
        pageData
    };
}

export default withLocale(Privacy);