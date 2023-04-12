import { Controller, Get } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  testRoute() {
    return this.calendarService.testRouteCalendar();
  }
}