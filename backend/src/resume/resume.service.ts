import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EducationHistory , WorkHistory, Certificate} from './entity/resume.entity'
import { ResumePageDto } from './dto/resume.dto';
import { ObjectID as ObjectIDType} from 'typeorm'
import { ObjectID } from 'mongodb';

@Injectable()
export class ResumeService {
    constructor(
      
    @InjectRepository(EducationHistory)
    private EducationHistoryRepository: Repository<EducationHistory>,
    @InjectRepository(WorkHistory)
    private WorkHistoryRepository: Repository<WorkHistory>,
    @InjectRepository(Certificate)
    private CertificateRepository: Repository<Certificate>,
    
    ){}
    
    async getinformation()
    {
        return "SUS";
      }

}
