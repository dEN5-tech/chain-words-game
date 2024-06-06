import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class LeaderboardResolver {
  @Query(() => String)
  leaderboard() {
    return "This is the leaderboard";
  }
}
