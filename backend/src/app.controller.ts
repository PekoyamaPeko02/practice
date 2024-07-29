import {Body,Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('eamil') email:string,
    @Body('password') password: string

  ){
    
  }
}
