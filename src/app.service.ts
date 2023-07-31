import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!!!';
  // }

  getTasks(): any[] {
    return [
      { item: "Draw a house", isDone: false}
    ]
  }
}
