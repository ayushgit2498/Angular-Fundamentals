import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { IToastr, TOASTR_TOKEN } from './common/toastr.service';
import { appRoutes } from '../../src/routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  EventsListComponent,
  EventThumbnialComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
} from './events/index';
import { AuthService } from './users/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleComponent } from './common/collapsable-well.component';

declare let toastr: IToastr;

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnialComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleComponent,
    DurationPipe,
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    AuthService,
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
  ],
})
export class AppModule {}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
