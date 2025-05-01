import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/controller/cats.controller';
import { CatService } from './cats/services/cat.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatService],
})
export class AppModule { }
