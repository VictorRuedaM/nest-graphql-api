import { Query, Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';

@Resolver()
export class CompanyResolver {

   constructor(readonly companyService: CompanyService){}

   @Query((returns) => [Company])
   companies(){
    return this.companyService.findAll();
   }
}
