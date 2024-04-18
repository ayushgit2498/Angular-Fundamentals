import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from '../shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
        padding-left: 10px;
      }
      .error input {
        background-color: red;
      }
    `,
  ],
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent: any;
  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.createEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
