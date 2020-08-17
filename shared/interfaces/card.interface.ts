export interface CardApiInterface {
    title_en: string;
    title_ar: string;
    description_en: string;
    description_ar: string;
    sub_description_en: string;
    sub_description_ar: string;
    image: {
            id: string,
            name: string,
            team_member: {
                title_en: string,
                title_ar: string,
                name_en: string,
                name_ar: string,
                image: string,
            },
            file: {
                name: string,
                alternativeText: string,
                url: string,
            },
            url: string,
            card: {
                title_en: string,
                title_ar: string,
                description_en: string,
                description_ar: string,
                sub_description_en: string,
                sub_description_ar: string,
                image: string,
            },
            articles: {
                id: string,
                title_en: string,
                title_ar: string,
                date: string,
                author_en: string,
                description_en: string,
                description_ar: string,
                link: string,
                tags: string,
                author_ar: string,
                image: string
            },
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
        team_member: {
            title_en: string,
            title_ar: string,
            name_en: string,
            name_ar: string,
            image: string,
        },
        file: {
            name: string,
            alternativeText: string,
            url: string
        },
        url: string,
        card: {
            title_en: string,
            title_ar: string,
            description_en: string,
            description_ar: string,
            sub_description_en: string,
            sub_description_ar: string,
            image: string,
        },
        articles: {
            title_en: string,
            title_ar: string,
            date: string,
            author_en: string,
            description_en: string,
            description_ar: string,
            link: string,
            tags: string,
            author_ar: string,
            image: string,
        },
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
        team_member: {
            title_en: string,
            title_ar: string,
            name_en: string,
            name_ar: string,
            image: string,
        },
        file: {
            name: string,
            alternativeText: string,
            url: string,
        },
        url: string,
        card: {
            title_en: string,
            title_ar: string,
            description_en: string,
            description_ar: string,
            sub_description_en: string,
            sub_description_ar: string,
            image: string,
        },
        articles: {
            title_en: string,
            title_ar: string,
            date: string,
            author_en: string,
            description_en: string,
            description_ar: string,
            link: string,
            tags: string,
            author_ar: string,
            image: string,
        },
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
            team_member: {
                title_en: card.image.team_member.title_en,
                title_ar: card.image.team_member.title_ar,
                name_en: card.image.team_member.name_en,
                name_ar: card.image.team_member.name_ar,
                image: card.image.team_member.image,
            },
            file: {
                name: card.image.file.name,
                alternativeText: card.image.file.alternativeText,
                url: card.image.file.url,
            },
            url: card.image.url,
            card: {
                title_en: card.image.card.title_en,
                title_ar: card.image.card.title_ar,
                description_en: card.image.card.description_en,
                description_ar: card.image.card.description_ar,
                sub_description_en: card.image.card.sub_description_en,
                sub_description_ar: card.image.card.sub_description_ar,
                image: card.image.card.image,
            },
            articles: {
                title_en: card.image.articles.title_en,
                title_ar: card.image.articles.title_ar,
                date: card.image.articles.date,
                author_en: card.image.articles.author_en,
                description_en: card.image.articles.description_en,
                description_ar: card.image.articles.description_ar,
                link: card.image.articles.link,
                tags: card.image.articles.tags,
                author_ar: card.image.articles.author_ar,
                image: card.image.articles.image,
            },
        }]
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