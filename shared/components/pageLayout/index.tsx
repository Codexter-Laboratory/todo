import React from "react";
import useTranslation from "../../../hooks/useTranslations";

interface Props {
    pageData: PageDataModel;
    children?: any;
}

export const ServicePageLayout = (props: Props) => {
    const {locale} = useTranslation();
    // const renderPragraphs = (paragraph, key) => (
    //     <Paragraph paragraph={paragraph} key={key}/>
    // );
    return (
        <div className='page__wrapper' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {
                props.pageData.image?
                    <div className='page__first_image_section'>
                        <img className='page__first_image' src={`${process.env.CMS_URL}${props.pageData.image.url}`} alt={props.pageData.image.name}/>
                    </div>
                    : <div className='page__first_section'>

                    </div>
            }
            {/*{*/}
            {/*    pageData.header_image ?*/}
            {/*        <div className="page-masthead">*/}
            {/*            <img src={pageData.header_image} alt={pageData.name.en}/>*/}
            {/*        </div> : null*/}
            {/*}*/}
            {/*<div className='page-content'>*/}
            {/*    {*/}
            {/*        subLogo ? <img className="page__sub-logo" src={subLogo} alt="elite dimensions services"/> : null*/}
            {/*    }*/}
            {/*    <h3 className='page-title'>{pageData.name[locale]}</h3>*/}
            {/*    <img className="brand-separator" alt="elite dimensions services" src="/illustrations/separator.svg"/>*/}
            {/*    <h5 className="page-description">{pageData.description[locale]}</h5>*/}

            {/*    {*/}
            {/*        firstImage ?*/}
            {/*            <img className="page__first-image" src={firstImage} alt="elite dimensions services"/> : null*/}
            {/*    }*/}
            {/*    {*/}
            {/*        pageData.paragraphs && loadParagraphs ? pageData.paragraphs.map(renderPragraphs) : null*/}
            {/*    }*/}
                {props.children}

            {/*    {pageData.bookingMessage ? <BookingMessage message={pageData.bookingMessage}/> : null}*/}
            {/*</div>*/}
        </div>
    );
};
