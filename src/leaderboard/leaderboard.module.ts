import { Module } from '@nestjs/common';
import { LeaderboardResolver } from './leaderboard.resolver';

@Module({
  providers: [LeaderboardResolver],
})
export class LeaderboardModule {}
