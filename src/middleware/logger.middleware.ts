import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
};

export default loggerMiddleware;