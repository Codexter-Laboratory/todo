import React from "react";
import {NextPage} from "next";
import withLocale from "../../../../hocs/withLocale";
import {Fetcher} from "../../../../helpers/fetch";
import useTranslation from "../../../../hooks/useTranslations";
import Paragraph from "../../../../shared/components/paragraph";
import {ParagraphModel} from "../../../../shared/interfaces/paragraph.interface";

interface Props {
    pageData: any;
    paragraphsz: ParagraphModel[];

}

const Privacy: NextPage<Props> = (props:Props) => {
    const {locale} = useTranslation();
    return (
        <div className="page-wrapper" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div>
                {props.paragraphsz.map(item => {
                    return(
                        <Paragraph>
                            <h4>{item.title[locale]}</h4>
                            <p>{item.description[locale]}</p>
                            <p>{item.subDescription[locale]}</p>
                        </Paragraph>
                    )
                })}
            </div>
        </div>
    );
}

Privacy.getInitialProps = async (ctx) => {
    let res = await Fetcher('page_privacy');
    let pageData = res.data.data.pages[0];
    let paragraphs;
    return {
        pageData,
        paragraphsz: pageData.paragraphsz.map(paragraph => new ParagraphModel(paragraph))
    };
}

export default withLocale(Privacy);
