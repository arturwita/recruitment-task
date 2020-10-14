import { Inject, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
    constructor(
        @Inject(JwtService)
        private jwtService: JwtService) {}

    async use(req: Request, res: Response, next: () => void): Promise<any> {
        try {
            const { authorization: value } = req.headers;
            const [, token] = value.split('Bearer: ');
            await this.jwtService.verify(token);
        }
        catch (e) {
            throw new UnauthorizedException();
        }

        next();
    }
}
