export interface CardApiInterface {
    title_en: string;
    title_ar: string;
    description_en: string;
    description_ar: string;
    sub_description_en: string;
    sub_description_ar: string;
    image: {
        name: string,
        file: {
            name: string,
            alternativeText: string,
            url: string,
        },
        url: string
    }

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
    image: [{
        name: string,
        file: {
            name: string,
            alternativeText: string,
            url: string
        },
        url: string,
    }]
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
    image: [{
        name: string,
        file: {
            name: string,
            alternativeText: string,
            url: string,
        },
        url: string,
    }]

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
        this.image = [{
            name: card.image.name,
            file: {
                name: card.image.file.name,
                alternativeText: card.image.file.alternativeText,
                url: card.image.file.url,
            },
            url: card.image.url,
        }];
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