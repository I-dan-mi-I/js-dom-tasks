/**
 * @param {Document} category
 */
export default (category) => {
    // BEGIN
    let categoryName = category.querySelector("h1").textContent.trim();
    let categoryDescription = category.querySelector(".description").textContent.trim();

    let articles = [];

    for (const article of category.querySelector(".links").querySelectorAll("div")) {

        let articleName = article.querySelector("h2").textContent.trim();
        let articleDescription = article.querySelector("p").textContent.trim();

        articles.push({
            title: articleName,
            description: articleDescription
        });

    }

    return {
        title: categoryName,
        description: categoryDescription,
        items: articles
    };
    // END
};
