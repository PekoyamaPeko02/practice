import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from "./user.entity";
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor{
    @InjectRepository(User) private readonly userRespository
  }
}
