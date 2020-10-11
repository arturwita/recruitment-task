import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class TodoDto {
    @ApiProperty()
    @IsInt()
    readonly userId: number;

    @ApiProperty()
    @IsInt()
    readonly todoId: number;

    @ApiProperty()
    @IsString()
    readonly title: string;

    @ApiProperty()
    @IsBoolean()
    readonly completed: boolean;
}
