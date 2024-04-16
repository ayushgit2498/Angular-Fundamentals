import { Injectable } from '@angular/core';
import { IUser } from '../user.mode';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Ayush',
      lastName: 'Gupta',
      username: username,
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
