import React from "react";
import {NextPage} from "next";
import withLocale from "../../../../hocs/withLocale";

interface Props {
    pageData: any;
}

const OurStory: NextPage<Props> = ({pageData}: Props) => {
    return (
      <></>
    );
}

OurStory.getInitialProps = ({req}) => {
    let pageData;
    return {
        pageData
    };
}

export default withLocale(OurStory);