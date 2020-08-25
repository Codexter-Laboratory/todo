import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import {ParagraphModel} from "shared/interfaces/paragraph.interface";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import Paragraph from "shared/components/paragraph";
import useTranslation from "hooks/useTranslations";
import {PageNames} from "../../../shared/enums/page-names.enum";
import style from "./style.module.scss"
import {ServicePageLayout} from "../../../shared/components/pageLayout";

interface Props {
    pageData: any;
    paragraphs: ParagraphModel[];
    members: CardDeckModel;
}

const OurStory: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    return (
        <ServicePageLayout pageData={props.pageData}>
            <section className='page__two_col_section'>
                <div className={`col-6 co   l-md-6`}>
                    {
                        props.paragraphs ?
                            props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Our Story').map(item => {
                                return (
                                    <Paragraph title={item.title[locale]} description={item.description[locale]}
                                               sub_description={item.subDescription[locale]}>

                                    </Paragraph>
                                )
                            })
                            : null
                    }
                </div>
            </section>
            <section className='page__two_col_section'>
                <div className={`col-6 col-md-6 ${style.page__right_section}`}>
                    {
                        props.paragraphs ?
                            props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Our Mission').map(item => {
                                console.log('res')
                                return (
                                    <Paragraph title={item.title[locale]} description={item.description[locale]}
                                               sub_description={item.subDescription[locale]}>
                                    </Paragraph>
                                )
                            })
                            : null
                    }
                </div>
            </section>
            <section className='page__two_col_section'>
                <div className={`col-6 col-md-6 ${style.page__our_story_paragraph}`}>
                    {
                        props.paragraphs ?
                            props.paragraphs.filter(paragraph => paragraph.title['en'] === 'Vision').map(item => {
                                console.log('res')
                                return (
                                    <Paragraph title={item.title[locale]} description={item.description[locale]}
                                               sub_description={item.subDescription[locale]}>
                                    </Paragraph>
                                )
                            })
                            : null
                    }
                </div>
            </section>
        </ServicePageLayout>
    );
}
OurStory.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_our_story);
    let pageData;

    pageData = res.data.data.pages[0];

    if (pageData) {
    }
    return {
        pageData,
        paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        // members: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'members')[0])
    };
}

export default withLocale(OurStory);
