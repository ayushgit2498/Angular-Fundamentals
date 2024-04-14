import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styles: [
    `
      .well div {
        color: red;
      }
    `,
  ],
})
export class EventsListComponent implements OnInit {
  eventsData: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.eventsData = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('Received ' + data);
  }

  handleComponentBoxClicked(data: any, d: any) {
    // console.log(data);
    // this.toastr.success('test');
  }
}
