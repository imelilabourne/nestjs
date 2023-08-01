import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("tasks")
  getTasks() {
    return this.appService.getTasks()
  }

  @Post("task")
  createTask(@Body() createTask) {
    return {
      name: createTask.name,
      age: 12
    }
  }
}
