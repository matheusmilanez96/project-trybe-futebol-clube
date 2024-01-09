import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';

export default function CombineTables(homeLb: ILeaderboard[], awayLb: ILeaderboard[]): ILeaderboard[] {
  const lb = homeLb.map((homeTeam) => {
    const lb2 = awayLb.forEach((awayTeam) => {
      if (homeTeam.name === awayTeam.name) {
        const totalPoints = homeTeam.totalPoints + awayTeam.totalPoints;
        const totalGames = homeTeam.totalGames + awayTeam.totalGames;
        return {
          name: homeTeam.name,
          totalPoints,
          totalGames,
          totalVictories: homeTeam.totalVictories + awayTeam.totalVictories,
          totalDraws: homeTeam.totalDraws + awayTeam.totalDraws,
          totalLosses: homeTeam.totalLosses + awayTeam.totalLosses,
          goalsFavor: homeTeam.goalsFavor + awayTeam.goalsFavor,
          goalsOwn: homeTeam.goalsOwn + awayTeam.goalsOwn,
          goalsBalance: homeTeam.goalsBalance + awayTeam.goalsBalance,
          efficiency: Math.round(((totalPoints / (totalGames * 3)) * 100) * 100) / 100,
        };
      }
    });
    return lb2;
  });
  return lb;
}
