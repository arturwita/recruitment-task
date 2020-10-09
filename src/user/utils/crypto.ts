import { ConfigService } from "@nestjs/config";
import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";

@Injectable()
export class Crypto {
    private readonly SALT: number;

    constructor(private configService: ConfigService) {
        this.SALT = Number.parseInt(this.configService.get('BCRYPT_SALT'));
    }

    public async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.SALT);
    }

    public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}
