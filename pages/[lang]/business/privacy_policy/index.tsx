import React from "react";
import {NextPage} from "next";
import withLocale from "../../../../hocs/withLocale";
import {Fetcher} from "../../../../helpers/fetch";
import {ParagraphModel} from "../../../../shared/interfaces/paragraph.interface";
import Paragraph from "../../../../shared/components/paragraph";
import useTranslation from "../../../../hooks/useTranslations";

interface Props {
    pageData: any;
    pParagraphs: ParagraphModel[];

}

const Privacy: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div>
                {props.pParagraphs.map(item => {
                    return (
                        <Paragraph title={item.title[locale]} description={item.description[locale]}
                                   sub_description={item.subDescription[locale]}/>
                    )
                })}
            </div>
        </div>
    );
}

Privacy.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_privacy');
    let pageData = res.data.data.pages[0];
    let pParagraphs;
    return {
        pageData,
        pParagraphs: pageData.pParagraphs.map(paragraph => new ParagraphModel(paragraph))
    };
}

export default withLocale(Privacy);
