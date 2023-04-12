import { Controller, Get } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  testRoute() {
    return this.calendarService.testRouteCalendar();
  }

  @Get('/get/google')
  async getGoogleCalendarEvents() {
    return await this.calendarService.getGoogleCalendarEvents();
  }

  @Get('/get/outlook')
  async getOutlookCalendarEvents() {
    return await this.calendarService.getOutlookCalendarEvents();
  }
}
