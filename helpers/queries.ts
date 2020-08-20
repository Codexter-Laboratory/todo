let tagsQuery = `tags {
    title_en,
    title_ar
}`;

let imagesQuery = `image {
      url,
      name,
      file{
      url,
      name,
      alternativeText,
      previewUrl
      }
}`;

let articlesQuery = `articles {
    title_en,
    title_ar,
    date,
    author_en,
    author_ar,
    description_en,
    description_ar,
    link,
    ${tagsQuery},
    ${imagesQuery}

}`;

let cardsQuery = `card {
    title_en,
    title_ar,
    description_en,
    description_ar,
    sub_description_en,
    ${imagesQuery}
}`;

let cardGroupsQuery = `card_groups{
    name,
    display_name_en,
    display_name_ar,
    ${cardsQuery}
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



let teamMembersQuery = `team_members {
    title_en,
    title_ar,
    name_en,
    name_ar,
    ${imagesQuery}
}`;

function getPageData(pageName: string) {
    console.log(pageName, 'nmaste')
    return `query {
        pages(where: {name_en: ${pageName}}){
            name_en,
            name_ar,
            description_en,
            description_ar,
            ${articlesQuery}
            ${cardGroupsQuery},
            ${paragraphsQuery},
            ${teamMembersQuery}
        }
    }
`
}

export {
    getPageData
};

