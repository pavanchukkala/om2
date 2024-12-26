// src/utils/generateSEO.js

/**
 * Generates SEO metadata for a given page.
 * @param {string} title - The title of the page.
 * @param {string} description - A brief description of the page.
 * @param {string} url - The canonical URL of the page.
 * @param {string[]} keywords - A list of relevant keywords.
 * @returns {Object} - An object containing meta tags for SEO.
 */
const generateSEO = (title, description, url, keywords = []) => {
    return {
        title,
        meta: [
            { name: 'description', content: description },
            { name: 'keywords', content: keywords.join(', ') },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: url },
        ],
        link: [
            { rel: 'canonical', href: url },
        ],
    };
};

export default generateSEO;
