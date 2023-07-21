import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';

export default function SortTable(table: ILeaderboard[]): ILeaderboard[] {
  const lb = table.sort((a, b) => {
    if (a.totalPoints > b.totalPoints) return -1;
    if (a.totalPoints < b.totalPoints) return 1;

    if (a.totalVictories > b.totalVictories) return -1;
    if (a.totalVictories < b.totalVictories) return 1;

    if (a.goalsBalance > b.goalsBalance) return -1;
    if (a.goalsBalance < b.goalsBalance) return 1;

    if (a.goalsFavor > b.goalsFavor) return -1;
    if (a.goalsFavor < b.goalsFavor) return 1;

    return 0;
  });
  return lb;
}
