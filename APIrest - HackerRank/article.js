const axios = require('axios');

const API_ARTICLE = 'https://jsonmock.hackerrank.com/api/article_users';

const getListUserByPage = (articles, threshold) => {
    const usernames = [];
    for (var article of articles) {
        if (article.submission_count > threshold) {
            usernames.push(article.username);
        }
    }
    return usernames;
}

const getUsername = async (threshold) => {
    let page = 1;
    let totalPages = 1;
    let usernames = [];

    while (page <= totalPages) {
        const response = await axios.get(`${API_ARTICLE}?page=${page}`);
        const articles = response.data.data;

        if (page === 1)
            totalPages = response.data.total_pages;
        
        usernames = usernames.concat(getListUserByPage(articles, threshold));
        page = page + 1;
    }

    console.log(usernames);

} 

getUsername(10)