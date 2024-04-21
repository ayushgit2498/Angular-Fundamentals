import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/Services/event.service';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
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
  eventsData: IEvent[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.eventsData = this.eventService.getEvents();
    // this.eventService.getEvents().subscribe((events) => {
    //   this.eventsData = events;
    // });
    this.eventsData = this.route.snapshot.data['events'];
  }

  handleEventClicked(data) {
    console.log('Received ' + data);
  }

  handleComponentBoxClicked(data: any, d: any) {
    // console.log(data);
    // this.toastr.success('test');
  }
}
