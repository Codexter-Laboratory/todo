import {CardApiInterface, CardModel} from "./card.interface";

export interface CardDeckApiInterface {
    name: string;
    display_name_en: string;
    display_name_ar: string;
    card: CardApiInterface[];
}

interface CardDeckInterface {
    name: string;
    display_name: {
        en: string;
        ar: string;
    };
    cards: CardModel[];
}
export class CardDeckModel implements CardDeckInterface {
    name: string;
    display_name: {
        en: string;
        ar: string;
    };
    cards: CardModel[];
    constructor(cardDeck: CardDeckApiInterface) {
        this.name = cardDeck.name;
        this.display_name = {
            en: cardDeck.display_name_en,
            ar: cardDeck.display_name_ar,
        };
        this.cards = cardDeck.card.map((c) => new CardModel(c));
    }

    getDisplayName = (locale: 'ar' | 'en'): string => {
        return this.display_name[locale];
    }
}


