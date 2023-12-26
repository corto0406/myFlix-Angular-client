import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {
  userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      () => {
        this.dialogRef.close(); // Close the modal on success
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
