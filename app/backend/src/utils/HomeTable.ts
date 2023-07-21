import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';
import IMatch from '../Interfaces/matches/IMatch';
import ITeam from '../Interfaces/teams/ITeam';

export default function HomeTable(teams: ITeam[], matches: IMatch[]): ILeaderboard[] {
  const lb = teams.map((team) => {
    const name = team.teamName;
    const teamMatches = matches.filter((m) => m.homeTeamId === team.id);
    const totalGames = teamMatches.length;
    const totalVictories = teamMatches.filter((m) => m.homeTeamGoals > m.awayTeamGoals).length;
    const totalDraws = teamMatches.filter((m) => m.homeTeamGoals === m.awayTeamGoals).length;
    const totalLosses = teamMatches.filter((m) => m.homeTeamGoals < m.awayTeamGoals).length;
    const goalsFavor = teamMatches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
    const goalsOwn = teamMatches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
    const totalPoints = totalVictories * 3 + totalDraws;
    const goalsBalance = goalsFavor - goalsOwn;
    const efficiency = Math.round(((totalPoints / (totalGames * 3)) * 100) * 100) / 100;
    const obj1 = { name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses };
    const obj2 = { goalsFavor, goalsOwn, goalsBalance, efficiency };
    return { ...obj1, ...obj2 };
  });
  return lb;
}
