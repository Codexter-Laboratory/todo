import React from "react";
import {NextPage} from "next";
import withLocale from "hocs/withLocale";
import {Fetcher} from "helpers/fetch";
import {ParagraphModel} from "shared/interfaces/paragraph.interface";
import {CardDeckApiInterface, CardDeckModel} from "shared/interfaces/card-deck.interface";
import CardDeck from "shared/components/card-deck";
import Cards from "shared/components/card";
import Paragraph from "shared/components/paragraph";
import useTranslation from "hooks/useTranslations";
import {PageNames} from "../../../shared/enums/page-names.enum";
import {TeamMembersModel} from "../../../shared/interfaces/team-members.interface";
import Service from "../../../shared/components/service";
import style from "./style.module.scss"
import {ServicePageLayout} from "../../../shared/components/pageLayout";

interface Props {
    pageData: any;
    // paragraphs: ParagraphModel[];
    team_member: TeamMembersModel[];
    // members: CardDeckModel;
}

const OurStory: NextPage<Props> = (props: Props) => {
    const {locale} = useTranslation();
    console.log(props.team_member);
    return (
        <ServicePageLayout pageData={props.pageData}>
            <section className='page__intro_section'>
                <div className={`col-6 col-md-6 ${style.page__left_section}`}>
                    <h1 className={style.page__intro_section_h1}>
                        Our Story
                    </h1>
                    <p className={style.page__intro_section_paragraph}>
                        PotPay is a product owned by Bakala SAL, the company was founded in 2018 in Lebanon, and was
                        soon
                        acknowledged as the firs aggregator of offline retail data in the MiddleEast.
                    </p>
                    <h1 className={style.page__meet_the_team}>Meet the team</h1>
                </div>
                <div className={`col-6 col-md-6 ${style.page__right_section_margin}`}>
                    <h4>Our mission</h4>
                    <p>Digitize 100% of in-store transactions with the introduction of e-receipts.</p>
                    <h4>Vision</h4>
                    <p>is to become the largest aggregator of offline retail data, a crucial step in the digitization of
                        retail stores and a step closer to making it seamless for businesses & consumers to navigate between offline & online.</p>
                </div>
                <div className={style.page__team_members}>
                    <CardDeck>
                        {
                            props.team_member ?
                                props.team_member.filter(team_members => team_members.title['en'] === 'CEO').map(item => {
                                    return (
                                        <div className={style.page__team_members}>
                                            <Service icon={item.image} title={item.title[locale]}
                                                     description={item.name[locale]} subDescription={""}>
                                            </Service>
                                        </div>
                                    )
                                })
                                : null
                        }
                        {
                            props.team_member ?
                                props.team_member.filter(team_members => team_members.title['en'] === 'CTO').map(item => {
                                    return (
                                        <div className={style.page__team_members}>
                                            <Service icon={item.image} title={item.title[locale]}
                                                     description={item.name[locale]} subDescription={""}>
                                            </Service>
                                        </div>
                                    )
                                })
                                : null
                        }
                        {
                            props.team_member ?
                                props.team_member.filter(team_members => team_members.title['en'] === 'Software Developer').map(item => {
                                    return (
                                        <div className={style.page__team_members}>
                                            <Service icon={item.image} title={item.title[locale]}
                                                     description={item.name[locale]} subDescription={""}>
                                            </Service>
                                        </div>
                                    )
                                })
                                : null
                        }
                    </CardDeck>
                </div>
            </section>
        </ServicePageLayout>
    );
}

OurStory.getInitialProps = async (ctx) => {
    let res = await Fetcher(PageNames.page_our_story);
    let pageData = res.data.data.pages[0];
    // let paragraphs;
    // let members;
    return {
        pageData,
        // paragraphs: pageData.paragraphs.map(paragraph => new ParagraphModel(paragraph)),
        // members: new CardDeckModel(pageData.card_groups.filter((c: CardDeckApiInterface) => c.name === 'members')[0]),
        team_member: pageData.team_members.map(team_members => new TeamMembersModel(team_members))
    };
}

export default withLocale(OurStory);
