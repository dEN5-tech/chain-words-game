import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ProxyMiddleware } from './middleware/proxy-middleware.middleware';
import loggerMiddleware from './middleware/logger.middleware';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV !== 'production', // Only enable playground in non-production environments
      autoSchemaFile: true,
      introspection: process.env.NODE_ENV !== 'production', // Only enable introspection in non-production environments
      path: '/graphql',
    }),
    LeaderboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(loggerMiddleware, ProxyMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}