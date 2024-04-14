import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventSerivce: EventService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const eventExist = !!this.eventSerivce.getEvent(+route.params['id']);
    if (!eventExist) {
      this.router.navigate(['/404']);
    }
    return eventExist;
  }
}
