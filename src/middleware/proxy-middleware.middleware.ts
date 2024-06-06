import { Injectable, NestMiddleware } from '@nestjs/common';
import * as createProxyMiddleware from 'http-proxy-middleware';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {

  private defaultProxy = createProxyMiddleware({
    target: 'http://192.168.42.189:3000',
    changeOrigin: true,
  });

  use(req: any, res: any, next: () => void) {
    if (!req.url.startsWith('/graphql')) {
      this.defaultProxy(req, res, next);
    } else {
      next();
    }
  }
}