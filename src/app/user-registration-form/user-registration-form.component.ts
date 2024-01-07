import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * UserRegistrationFormComponent represents the user registration form.
 * @class
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {
  /**
   * Object containing user registration data.
   * @type {object}
   */
  userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * Constructor of the UserRegistrationFormComponent.
   * @constructor
   * @param {FetchApiDataService} fetchApiData - The FetchApiDataService for API communication.
   * @param {MatDialogRef<UserRegistrationFormComponent>} dialogRef - Reference to the dialog.
   * @param {MatSnackBar} snackBar - Service to display snack bar messages.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method
   */
  ngOnInit(): void {}

  /**
   * Registers a new user based on the provided registration data.
   * @method
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      () => {
        this.dialogRef.close();
        this.snackBar.open('User registered successfully!', 'OK', { duration: 2000 });
      },
      (error) => {
        console.error('Registration failed:', error);
        const errorMessage = error.error?.message || 'Registration failed. Please try again.';
        this.snackBar.open(errorMessage, 'OK', { duration: 2000 });
      }
    );
  }
}
