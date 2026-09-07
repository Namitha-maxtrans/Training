import { IsNumber, isNumber, IsString } from "class-validator";

export class createProductdto{
    @IsString()
    name:string;
    @IsNumber()
    price:number;

}