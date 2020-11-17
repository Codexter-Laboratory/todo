export interface ArticlesApiInterface {
    title_en: string;
    title_ar: string;
    author_en: string;
    author_ar: string;
    description_en: string;
    description_ar: string;
    date: string;
}

export interface ArticlesInterface {
    title: {
        en: string;
        ar: string;
    };
    author: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
    date: string;
}

export class ArticlesModel implements ArticlesInterface{
    title: {
        en: string;
        ar: string;
    };
    author: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
    date: string;

    constructor(art: ArticlesApiInterface) {
        this.title = {
            en: art.title_en,
            ar: art.title_ar,
        };
        this.author = {
            en: art.author_en,
            ar: art.author_ar,
        };
        this.description = {
            en: art.description_en,
            ar: art.description_ar,
        };
        this.date = art.date;
    }
    getTitle = (locale: 'ar' | 'en'): string => {
        return this.title[locale];
    }
    getAuthor = (locale: 'ar' | 'en'): string => {
        return this.author[locale];
    }
    getDescription = (locale: 'ar' | 'en'): string => {
        return this.description[locale];
    }
    getDate = (): string => {
        return this.date;
    }
}