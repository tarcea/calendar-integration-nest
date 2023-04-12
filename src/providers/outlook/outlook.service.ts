import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OutlookService {
  constructor(private config: ConfigService) {}
  getCalendar() {
    return 'Here is your Outlook calendar, dude...';
  }

  async getEvents() {
    return 'outlook events';
  }

  async insertEvent() {
    //
  }
}
