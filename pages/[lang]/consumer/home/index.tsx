import React from "react";
import {NextPage} from "next";
import withLocale from "../../../../hocs/withLocale";

interface Props {
    pageData: any;
}


const Home: NextPage<Props> = ({pageData}: Props) => {
    return (
        <></>
    );
}

Home.getInitialProps = ({req}) => {
    let pageData;
    return {
        pageData
    };
}

export default withLocale(Home);