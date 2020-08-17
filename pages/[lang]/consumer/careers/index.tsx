import React from "react";
import {NextPage} from "next";
import withLocale from "../../../../hocs/withLocale";

interface Props {
    pageData: any;

}

const Careers: NextPage<Props> = ({pageData}:Props) => {
    return (
        <></>
    );
}
Careers.getInitialProps=({req}) => {
    let pageData;
    return {
        pageData
    };
}
export default withLocale(Careers);