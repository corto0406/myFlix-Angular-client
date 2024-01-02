import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface MovieDetailsData {
  movie: {
    Title: string;
    Description: string;
    // Add other properties as needed
  };
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MovieDetailsData) {}
}
