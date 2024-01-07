import { Component, OnInit } from '@angular/core';

/**
 * UserProfileComponent represents the user profile.
 * @class
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  /**
   * User object containing profile information.
   * @type {object}
   */
  user = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    // Add other profile properties as needed
  };

  /**
   * Flag indicating whether the profile is in edit mode.
   * @type {boolean}
   */
  isEditing = false;

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method
   */
  ngOnInit(): void {}

  /**
   * Toggles the edit mode for the user profile.
   * @method
   */
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  /**
   * Saves changes made to the user profile.
   * @method
   * @remarks Implement logic to save changes to the user profile.
   */
  saveChanges(): void {
    console.log('Profile changes saved');
    this.toggleEdit();
  }
}
