import React from "react";
import {NextPage} from "next";
import withLocale from "../../../hocs/withLocale";
import {Fetcher} from "../../../helpers/fetch";

interface Props {
    pageData: any;
}

const Press: NextPage<Props> = ({pageData}: Props) => {
    return(
      <></>
    );
}

Press.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_press');
    let pageData = res.data;
    return {
        pageData
    };
}

export default withLocale(Press);