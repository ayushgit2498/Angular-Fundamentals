import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
        margin: 5px;
      }
      .event-thumbnail-component {
        max-width: 500px;
        width: 480px;
        height: 320px;
        padding: 20px;
        position: relative;
      }
      .event-thumbnail-component h1 {
        margin: 0;
      }
      .green {
        color: green !important;
      }
      .bold {
        font-weight: bold !important;
      }
    `,
  ],
})
export class EventThumbnialComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();
  someProperty: any = 'some foo property';

  handleClickMe() {
    this.eventClick.emit('foo');
  }
  logFoo() {
    console.log('Logging some foo value');
  }

  getStartTimeClass() {
    const isEarly = this.event?.time === '8:00 am';
    return {
      green: isEarly,
      bold: isEarly,
    };
  }

  getFontStyle() {
    const isEarly = this.event?.time === '8:00 am';
    // return {
    //   'font-size': isEarly ? '30px' : '20px',
    // };
    if (isEarly) {
      return {
        'font-size': '30px',
      };
    }
  }
}
