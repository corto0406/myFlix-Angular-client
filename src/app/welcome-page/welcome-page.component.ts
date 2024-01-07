import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * WelcomePageComponent represents the welcome page of the application.
 * @class
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  /**
   * Constructor of the WelcomePageComponent.
   * @constructor
   * @param {MatDialog} dialog - Service for opening dialogs.
   */
  constructor(public dialog: MatDialog) { }
  
  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method
   */
  ngOnInit(): void {
  }
  
  /**
   * Opens the user registration dialog.
   * @method
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the user login dialog.
   * @method
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }
}
