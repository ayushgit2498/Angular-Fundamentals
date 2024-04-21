import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKEN } from 'src/app/common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
        padding-left: 10px;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(
    @Inject(TOASTR_TOKEN) private toastr: IToastr,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
      this.toastr.success('Profile Saved');
      //this.router.navigate(['events']);
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
