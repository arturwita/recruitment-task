import { Injectable, InternalServerErrorException } from '@nestjs/common';
import got from 'got';


@Injectable()
export class HttpClient {
    async downloadData(URL: string): Promise<any> {
        try {
            const response = await got(URL, {
                retry: {
                    limit: 3,
                    calculateDelay: ({attemptCount}) =>
                        attemptCount * 150 || 50
                },
                timeout: 500,
                responseType: 'json',
                pagination: {
                    backoff: 2
                }
            });

            return response.body;
        }
        catch (e) {
            throw new InternalServerErrorException()
        }
    }
}
