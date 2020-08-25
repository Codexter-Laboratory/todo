import React from "react";
import useTranslation from "hooks/useTranslations";

interface Props {
    pageData: any;
    children?: any;
}

export const ServicePageLayout = (props: Props) => {
    const {locale} = useTranslation();
    return (
        <div className='page__wrapper' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {
                props.pageData.image ?
                    <>
                        <div className='page__first_image_section'>
                            <img className='page__first_image' src={`${process.env.CMS_URL}${props.pageData.image.url}`}
                                 alt={props.pageData.image.name}/>
                        </div>
                    </>
                    : <div className='page__first_section'></div>
            }
            <div className='page-content'>
                {props.children}
            </div>
        </div>
    );
};
