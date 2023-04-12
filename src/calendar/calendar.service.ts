import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleService } from '../providers/google/google.service';
import { OutlookService } from '../providers/outlook/outlook.service';

@Injectable()
export class CalendarService {
  constructor(
    private config: ConfigService,
    private googleService: GoogleService,
    private outlookService: OutlookService,
  ) {}

  testRouteCalendar() {
    return 'Here is your calendar, dude...' + this.config.get('TEST210');
  }

  async getGoogleCalendarEvents() {
    return await this.googleService
      .authorize()
      .then(this.googleService.getEvents)
      .catch(console.error);
  }

  async getOutlookCalendarEvents() {
    return await this.outlookService.getEvents();
  }
}
