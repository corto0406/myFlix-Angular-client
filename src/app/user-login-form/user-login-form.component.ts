import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router // Inject the Router service
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      () => {
        // Logic for a successful user login goes here! (To be implemented)
        this.dialogRef.close(); // Close the modal on success
        this.snackBar.open('User logged in successfully!', 'OK', { duration: 2000 });

        // Redirect to the 'movies' route on successful login
        this.router.navigate(['movies']);
      },
      (error) => {
        console.error('Login failed:', error);
        let errorMessage = 'Login failed. Please check your credentials and try again.';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        this.snackBar.open(errorMessage, 'OK', { duration: 2000 });
      }
    );
  }
}
