import {ImageInterface} from "./image.interface";

export interface CardApiInterface {
    title_en: string;
    title_ar: string;
    description_en: string;
    description_ar: string;
    sub_description_en: string;
    sub_description_ar: string;
    image: ImageInterface

}

interface CardInterface {
    title: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string
    };
    subDescription: {
        en: string;
        ar: string;
    };
    image: ImageInterface
}

export class CardModel implements CardInterface {
    title: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string
    };
    subDescription: {
        en: string;
        ar: string;
    };
    image: ImageInterface

    constructor(card: CardApiInterface) {
        this.title = {
            en: card.title_en,
            ar: card.title_ar,
        };
        this.description = {
            en: card.description_en,
            ar: card.description_ar,
        };
        this.subDescription = {
            en: card.sub_description_en,
            ar: card.sub_description_ar,
        };
        this.image = card.image
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
}
