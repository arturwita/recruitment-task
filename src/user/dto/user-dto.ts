import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty()
    @IsString()
    readonly login: string;

    @ApiProperty()
    @IsString()
    @MinLength(5)
    readonly password: string;
}
