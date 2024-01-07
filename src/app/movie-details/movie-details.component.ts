import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * MovieDetailsComponent displays details about a movie.
 * @class
 */
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  /**
   * Constructor for the MovieDetailsComponent.
   * @constructor
   * @param data - Data containing the movie title and description.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string;
      Description: string;
    }
  ) {}

  /**
   * Lifecycle hook called after the component is initialized.
   * @method
   */
  ngOnInit(): void {
    // Additional initialization logic can be added here
  }
}
