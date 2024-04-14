import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent {
  eventData = {
    id: 1,
    name: 'Angular Conference',
    date: '14/4/2024',
    time: '10:00 am',
    price: 1000,
    imageUrl: '/assets/images/angular-connect-shield.png',
    location: {
      address: 'Kharadi',
      city: 'Pune',
      country: 'India',
    },
  };

  handleEventClicked(data) {
    console.log('Received ' + data);
  }
}
