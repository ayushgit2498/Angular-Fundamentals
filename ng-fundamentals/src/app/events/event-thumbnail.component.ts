import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnialComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  someProperty: any = 'some foo property';

  handleClickMe() {
    this.eventClick.emit('foo');
  }
  logFoo() {
    console.log('Logging some foo value');
  }
}
