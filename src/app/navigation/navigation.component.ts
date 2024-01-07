import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

/**
 * NavigationComponent represents the navigation bar of the application.
 * @class
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  /**
   * Constructor for the NavigationComponent.
   * @constructor
   * @param fetchApiData - Service for fetching API data.
   * @param router - Angular router service.
   */
  constructor (
    public fetchApiData: FetchApiDataService,
    public router: Router,
  ) {}

  /**
   * Navigates to the movies page.
   * @method
   */
  toMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * Navigates to the profile page.
   * @method
   */
  toProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * Logs out the user.
   * @method
   * @returns {void} - User and token removed from local storage, user navigated to the welcome page.
   */
  logoutUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['welcome']);
  }
}
