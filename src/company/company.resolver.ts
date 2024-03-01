import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/createCompany.dto';
import { UpdateCompanyInput } from './dto/updateCompany.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
export class CompanyResolver {

   constructor(readonly companyService: CompanyService){}

   @Query(() => [Company])
   getCompanies(){
    return this.companyService.findAll();
   }

   @Query(() => Company)
   getOneCompany(@Args('_id') _id: string){
    return this.companyService.findOne(_id);
   }

   @Mutation(() => Company)
   createCompany(@Args('createCompayInput') createCompanyDto: CreateCompanyInput): Promise<Company>{
      return this.companyService.create(createCompanyDto);
   }

   @Mutation(() => Company)
   updateCompany(@Args('updateCompayInput') updateCompanyInput: UpdateCompanyInput): Promise<Company>{
      return this.companyService.update(updateCompanyInput._id, updateCompanyInput);
   }

   @Mutation(() => Company)
   deleteCompany(@Args('_id') _id: string): Promise<Company>{
      return this.companyService.delete(_id);
   }
   
}
