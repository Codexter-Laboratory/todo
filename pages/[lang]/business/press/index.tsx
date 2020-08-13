import React from "react";
import {NextPage} from "next";
import withLocale from "../../../../hocs/withLocale";

interface Props {
    pageData: any;
}

const Press: NextPage<Props> = ({pageData}: Props) => {
    return(
      <></>
    );
}
Press.getInitialProps = ({req}) => {
    let pageData;
    return{
        pageData
    };
}

export default withLocale(Press);