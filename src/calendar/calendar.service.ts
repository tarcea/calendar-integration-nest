import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CalendarService {
  constructor(private config: ConfigService) {}

  testRouteCalendar() {
    return 'Here is your calendar, dude...' + this.config.get('TEST210');
  }
}
