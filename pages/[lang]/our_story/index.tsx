import React from "react";
import {NextPage} from "next";
import withLocale from "../../../hocs/withLocale";
import {Fetcher} from "../../../helpers/fetch";

interface Props {
    pageData: any;
}

const OurStory: NextPage<Props> = ({pageData}: Props) => {
    return (
      <div>Hello</div>
    );
}

OurStory.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_ourStory');
    let pageData = res.data;
    return {
        pageData
    };
}

export default withLocale(OurStory);