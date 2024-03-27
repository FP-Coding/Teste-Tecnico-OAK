import { IsNumberString } from 'class-validator';

export class productFindDTO {
  @IsNumberString()
  id: number;
}
