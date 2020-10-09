import { ConfigService } from "@nestjs/config";
import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Crypto {
    private readonly SALT: number;

    constructor(private configService: ConfigService,
                private jwtService: JwtService) {
        this.SALT = Number.parseInt(this.configService.get('BCRYPT_SALT'));
    }

    public async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.SALT);
    }

    public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    public async generateToken(payload: any): Promise<any> {
        return this.jwtService.sign(payload);
    }
}
