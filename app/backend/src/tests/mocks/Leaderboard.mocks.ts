const avaiMatches = [
  {
    id: 8,
    homeTeamId: 15,
    homeTeamGoals: 0,
    awayTeamId: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "São José-SP"
    },
    awayTeam: {
      teamName: "Avaí/Kindermann"
    }
  },
  {
    id: 9,
    homeTeamId: 1,
    homeTeamGoals: 0,
    awayTeamId: 12,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: "Avaí/Kindermann"
    },
    awayTeam: {
      teamName: "Palmeiras"
    }
  },
  {
    id: 17,
    homeTeamId: 1,
    homeTeamGoals: 2,
    awayTeamId: 8,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: "Avaí/Kindermann"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 26,
    homeTeamId: 13,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: "Real Brasília"
    },
    awayTeam: {
      teamName: "Avaí/Kindermann"
    }
  },
  {
    id: 33,
    homeTeamId: 1,
    homeTeamGoals: 1,
    awayTeamId: 16,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "Avaí/Kindermann"
    },
    awayTeam: {
      teamName: "São Paulo"
    }
  },
];

const homeLb = [
  {
    name: "Avaí/Kindermann",
    totalPoints: 1,
    totalGames: 3,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 2,
    goalsFavor: 3,
    goalsOwn: 7,
    goalsBalance: -4,
    efficiency: 11.11,
  }
];

const awayLb = [
  {
    name: "Avaí/Kindermann",
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 1,
    goalsBalance: 0,
    efficiency: 50,
  }
];

export {
  avaiMatches,
  homeLb,
  awayLb,
};