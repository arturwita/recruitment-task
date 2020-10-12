import { Injectable, InternalServerErrorException } from '@nestjs/common';
import got from 'got';


@Injectable()
export class ExternalClient {
    async downloadData(URL: string): Promise<any> {
        try {
            const response = await got(URL);

            return JSON.parse(response.body);
        }
        catch (e) {
            throw new InternalServerErrorException()
        }
    }
}
