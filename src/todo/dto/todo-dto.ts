import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class TodoDto {
    @ApiProperty()
    @IsInt()
    userId: number;

    @ApiProperty()
    @IsInt()
    todoId: number;

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsBoolean()
    completed: boolean;
}
