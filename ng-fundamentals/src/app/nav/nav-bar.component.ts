import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
