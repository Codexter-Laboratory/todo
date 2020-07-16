export interface CopyLabelsInterface {
    ABOUT_US: string;
}

export interface TranslationsInterface {
    en: CopyLabelsInterface,
    ar: CopyLabelsInterface,
}

const translations: TranslationsInterface = {
    en: {
        ABOUT_US: 'About',
    },
    ar: {
        ABOUT_US: 'عــــن الشـــركـــة',
    }
};

export default translations;
