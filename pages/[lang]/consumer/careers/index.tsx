import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import {PageNames} from "../../../../shared/enums/page-names.enum";

interface Props {
    pageData: any;

}

const Careers: NextPage<Props> = ({pageData}:Props) => {
    return (
        <></>
    );
}
Careers.getInitialProps= async (ctx) => {
    let res = await Fetcher(PageNames.page_careers);

    let pageData;
    pageData = res.data.data.pages[0];
    return {
        pageData
    };
}
export default withLocale(Careers);