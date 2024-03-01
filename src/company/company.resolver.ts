import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/createCompany.dto';

@Resolver()
export class CompanyResolver {

   constructor(readonly companyService: CompanyService){}

   @Query((returns) => [Company])
   companies(){
    return this.companyService.findAll();
   }

   @Mutation((returns) => Company)
   createCompany(@Args('createCompayInput') createCompanyDto: CreateCompanyDto): Promise<Company>{
      return this.companyService.create(createCompanyDto);
   }
}
