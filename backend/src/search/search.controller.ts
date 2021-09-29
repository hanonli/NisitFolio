import { Get, Post, Controller, Body, Param, Delete, Query } from "@nestjs/common";
import * as mongoose from 'mongoose';
import { SearchService } from "./search.service";

@Controller('search')
export class SearchController {
  constructor (
    private readonly searchService : SearchService
  ) {}

  // @Get('/top?')
  // async search(
  //   @Query('q') q: string ,
  //   @Query('userId') userId: string ,
  // ): Promise<any[]> {
  //   console.log(q) ;
  //   const JobName = await this.searchService.findJobName(q, userId) ;
  //   // if (JobName.length != 0)
  //   //   return JobName ;
  //   const UserName = await this.searchService.findUserName(q, userId) ;
  //   let sorted_result ;
  //   if (JobName.length == 0) 
  //   sorted_result = await this.searchService.sorting_array(UserName) ;
  //   else if (UserName.length == 0)
  //   sorted_result = await this.searchService.sorting_array(JobName) ;
  //   else {
  //     let result = [] ;
  //     for (var obj1 of JobName) {
  //       if (!result.includes(obj1))
  //       result.push(obj1) 
  //     }
  //     for (var obj2 of UserName) {
  //       if (!result.includes(obj2)) 
  //       result.push(obj2) ;
  //     }
  //     sorted_result = await this.searchService.sorting_array(result) ;
  //   }
  //   console.log("JobName:", JobName);
  //   console.log("UserName:", UserName);
  //   return sorted_result ;
  // }

  @Get('/top?')
  async search(
    @Query('q') q: string ,
    @Query('userId') userId: string ,
  ): Promise<any> {
    return await this.searchService.find_Query(q, userId) ;
  }
}