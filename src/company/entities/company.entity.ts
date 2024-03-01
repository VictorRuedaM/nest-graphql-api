import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Company {

  @Field({nullable: true})
  _id?: string;
  @Field()
  company_name: string;
  @Field()
  address: string;
  @Field()
  phone_number: string;
  @Field()
  emial: string;
  @Field()
  state: string;
  @Field()
  city: string;
  @Field((type) => Int, {nullable: true})
  zip_code?: number;
  @Field({nullable: true})
  website?: string;
  @Field()
  industry: string;
  
}