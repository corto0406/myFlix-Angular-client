import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    // Add other profile properties as needed
  };

  isEditing = false;

  ngOnInit(): void {}

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    // Implement logic to save changes to the user profile
    console.log('Profile changes saved');
    this.toggleEdit();
  }
}



