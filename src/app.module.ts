import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarController } from './calendar/calendar.controller';
import { CalendarService } from './calendar/calendar.service';
import { GoogleService } from './providers/google/google.service';
import { OutlookService } from './providers/outlook/outlook.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, CalendarController],
  providers: [AppService, CalendarService, GoogleService, OutlookService],
})
export class AppModule {}
