import { Field, InputType, PartialType, ID } from "@nestjs/graphql";
import {IsMongoId, IsNotEmpty} from "class-validator";
import { CreateCompanyInput } from "./createCompany.dto";

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
 
  @IsNotEmpty()
  @IsMongoId()
  @Field(() => ID)
  _id: string

}