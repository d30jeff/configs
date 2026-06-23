import { Module } from '@nestjs/common';
import { ZController } from 'src/z.controller';




import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [
    AppController,
    AppController,
    AppController,
    AppController,
    AppController,
    AppController,
    ZController,
    ZController,
    ZController],
  imports: [],
  providers: [AppService],
})
export class AppModule {



}
