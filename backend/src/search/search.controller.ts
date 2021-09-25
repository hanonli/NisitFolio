import { Get, Post, Controller, Body, Param, Delete, Query } from "@nestjs/common";
import * as mongoose from 'mongoose';
import { SearchService } from "./search.service";

@Controller('search')
export class SearchController {
  constructor (
    private readonly searchService : SearchService
  ) {}

  @Get('/top?')
  async search(
    @Query('q') q: string ,
    @Query('userId') userId: string ,
  ): Promise<any[]> {
    console.log(q) ;
    
    const JobName = await this.searchService.findJobName(q, userId) ;
    if (JobName.length != 0)
      return JobName ;
    const UserName = await this.searchService.findUserName(q, userId) ;
    return UserName ;
  }
}