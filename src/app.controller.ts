import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto } from './dto/task.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("tasks")
  getTasks() {
    return this.appService.getTasks()
  }

  @Post("task")
  createTask(@Body() createTask: TaskDto) {
    return {
      name: createTask.name,
      age: createTask.age
    }
  }
}
