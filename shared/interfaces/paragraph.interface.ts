export interface ParagraphApiInterface{
    title_en: string;
    title_ar: string;
    description_en: string;
    description_ar: string;
    sub_description_en: string;
    sub_description_ar: string;
    date: string;
}

interface ParagraphInterface {
    title: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
    subDescription: {
        en: string;
        ar: string;
    };
    date: string;
}

export class ParagraphModel implements ParagraphInterface{
    title: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
    subDescription: {
        en: string;
        ar: string;
    };
    date: string;
    constructor(par: ParagraphApiInterface) {
        this.title = {
            en: par.title_en,
            ar: par.title_ar,
        };
        this.description = {
            en: par.description_en,
            ar: par.description_ar,
        };
        this.subDescription = {
            en: par.sub_description_en,
            ar: par.sub_description_ar,
        };
        this.date = par.date;
    }

    getTitle = (locale: 'ar' | 'en'): string => {
        return this.title[locale];
    }
    getDescription = (locale: 'ar' | 'en'): string => {
        return this.description[locale];
    }
    getSubDescription = (locale: 'ar' | 'en'): string => {
        return this.subDescription[locale];
    }
    getDate = (): string => {
        return this.date;
    }
}