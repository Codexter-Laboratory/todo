import React from "react";
import useTranslation from "hooks/useTranslations";

interface Props {
    pageData: any;
    pageName: string;
    children?: any;
}

export const ServicePageLayout = (props: Props) => {
    let renderLayout = () => {
        if (props.pageData.name_en === 'page_consumer_home') {
            return <div className='page__first_noimage_section'>
                <img className='page__first_image' src='/illustrations/home-bgck-consumer.svg'
                     alt='home-bgck-consumer'/>
            </div>
        } else if (props.pageData.image) {
            return <>
                <div className='page__first_image_section'>
                    <img className='page__first_image' src={`${process.env.CMS_URL}${props.pageData.image.url}`}
                         alt={props.pageData.image.name}/>
                </div>
            </>
        } else if (props.pageData.name_en === 'page_business_privacy' || props.pageData.name_en === 'page_consumer_privacy') {
            return <>
                <div/>
            </>
        } else if (props.pageData.name_en === 'page_business_home') {
            return <div className='page__first_noimage_section'>
                <img className='page__first_image' src='/assets/b2b_background.png'
                     alt='home-bgck'>
                </img>


            </div>
        }
        else {
            return<div className='page__first_noimage_section'>
                <img className='page__first_image' src='/illustrations/home-bgck.svg'
                     alt='home-bgck'/>
            </div>
        }
    }

    const {locale} = useTranslation();
    return (
        <div className='page__wrapper' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {
                renderLayout()
            }
            <div className='page-content'>
                {props.children}
            </div>
        </div>
    );
};
