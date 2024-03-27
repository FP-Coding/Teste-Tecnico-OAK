import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class productCreateDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  availability: boolean;
}
