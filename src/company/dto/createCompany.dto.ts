import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

@InputType()
export class CreateCompanyDto {
 
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
  company_name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
  address: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
  phone_number: string;

  @IsNotEmpty()
  @IsEmail()
  @MinLength(6)
  @Field()
  emial: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
  state: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
  city: string;

  @IsOptional()
  @IsNumber()
  @Field((type) => Int, {nullable: true})
  zip_code?: number;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @Field({nullable: true})
  website?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
  industry: string;
}