import {ImageInterface} from "./image.interface";
import {locales} from "../../translations/config";

export interface TeamMembersApiInterface {
    title_en: string;
    title_ar: string;
    name_en: string;
    name_ar: string;
    image: ImageInterface;
}

export interface TeamMembersInterface{
    title: {
        en: string;
        ar: string;
    };
    name: {
        en: string;
        ar: string;
    };
    image: ImageInterface;
}
export class TeamMembersModel implements TeamMembersInterface {
    title: {
        en: string;
        ar: string;
    };
    name: {
        en: string;
        ar: string;
    };
    image: ImageInterface;
    constructor(team: TeamMembersApiInterface) {
        this.title = {
            en: team.title_en,
            ar: team.title_ar,
        };
        this.name = {
            en: team.name_en,
            ar: team.name_ar,
        };
        this.image = team.image;
    }
    getTitle = (locale: 'ar' | 'en'): string => {
        return this.title[locale];
    }
    getName = (locale: 'ar' | 'en'): string => {
        return this.name[locale];
    }
}