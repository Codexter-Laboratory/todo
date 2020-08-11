let articlesQuery = `articles {
    title_en,
    title_ar,
    date,
    author_en,
    author_ar,
    description_en,
    description_ar,
    link,
    image{
    url,
    name},
    tags {
    title_en,
    title_ar}
}`;

let cardGroupsQuery = `card_groups{
    name,
    display_name_en,
    display_name_ar,
    cards{
    title_en,
    title_ar,
    description_en,
    description_ar,
    sub_description_en,
    sub_description_ar,
    icon{
    url,
    name}
    }
}`;

let cardsQuery = `cards {
    title_en,
    title_ar,
    description_en,
    description_ar,
    sub_description_en,
    sub_description_ar,
    icon{
    url,
    name}
}`;

let tagQuery = `tag {
    title_en,
    title_ar
}`;

let paragraphsQuery = `paragraphs {
    title_en,
    title_ar,
    description_en,
    description_ar,
    sub_description_en,
    sub_description_ar,
    date
}`;

let imagesQuery = `images {
    url,
    name
}`;

let teamMembersQuery = `team_members {
    title_en,
    title_ar,
    name_en,
    name_ar
}`;

function getPageData(pageName: string) {
    return `query {
        pages(where: {name_en: ${pageName}}){
            name_en,
            name_ar,
            description_en,
            description_ar,
            ${articlesQuery}
            ${cardGroupsQuery},
            ${paragraphsQuery},
            ${teamMembersQuery},
            
        }
    }
`
}
//tags, images and cards queries are causing the issues

//${imagesQuery}
//${cardsQuery}
//${tagQuery}

export {
    getPageData
};

