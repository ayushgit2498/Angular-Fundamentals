import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styles: [''],
})
export class CollapsibleComponent {
  //@Input() title: string;
  visible: boolean = true;

  toggleContent() {
    console.log(this.visible);

    this.visible = !this.visible;
  }
}
