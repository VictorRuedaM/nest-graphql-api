import { Injectable } from '@nestjs/common';
import { Company } from './entities/company.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/createCompany.dto';


@Injectable()
export class CompanyService {

  constructor(@InjectModel('Company') private readonly companyModel: Model<Company>){}

  async findAll(): Promise<Company[]>{
    return await this.companyModel.find();
    
  }

  async create(comapyDto: CreateCompanyDto): Promise<Company>{
    const newCompany = await this.companyModel.create(comapyDto);
    newCompany.save();
    return newCompany;
  }
}
