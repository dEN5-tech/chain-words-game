import { Module } from '@nestjs/common';
import { ProxyMiddleware } from './proxy-middleware.middleware';

@Module({
  providers: [ProxyMiddleware],
  exports: [ProxyMiddleware],
})
export class ProxyMiddlewareModule {}
