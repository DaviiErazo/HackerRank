const axios = require('axios');

const API_COMPETITION = 'https://jsonmock.hackerrank.com/api/football_competitions';
const API_MATCHES = 'https://jsonmock.hackerrank.com/api/football_matches';

const LOCAL = 'team1goals';
const VISITOR = 'team2goals'

const getTotalGoalsForAllMatches = (matches, team) => {
    let goals = 0;
    for (const match of matches) {
        goals += parseInt(match[team]);
    }
    return goals;
}


const getTotalGoalsForTeam = async (url, team) => {
    let page = 1;
    let totalPages = 1;
    let totalGoals = 0;

    while (page <= totalPages) {
        const matchesResponse = await axios.get(`${url}&pages=${page}`);
        const matches = matchesResponse.data.data;

        if (page === 1)
            totalPages = matchesResponse.data.total_pages;

        totalGoals = totalGoals + getTotalGoalsForAllMatches(matches, team);
        page = page + 1;
    }

    return totalGoals;
}

const getTotalGoalsForWinnerCompetition = async (competition, year) => {
    const response = await axios.get(`${API_COMPETITION}?name=${competition}&year=${year}`);
    const winner = response.data.data[0].winner;

    const localUrl = `${API_MATCHES}?competition=${competition}&year=${year}&team1=${winner}`;
    const visitorUrl = `${API_MATCHES}?competition=${competition}&year=${year}&team2=${winner}`;

    const totalAsLocal = await getTotalGoalsForTeam(localUrl, LOCAL);
    const totalAsVisitor = await getTotalGoalsForTeam(visitorUrl, VISITOR);

    console.log(winner);
    console.log(totalAsLocal + totalAsVisitor);
}


getTotalGoalsForWinnerCompetition('UEFA Champions League', 2015);
