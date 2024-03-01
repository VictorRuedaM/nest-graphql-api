import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schemas/company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Company',
      schema: CompanySchema
    }])
  ],
  controllers: [],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
