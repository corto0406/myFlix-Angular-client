/**
 * @fileoverview Angular component for displaying and interacting with movie favorites.
 * @module FavoritesDialogComponent
 */

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Interface representing data related to a movie.
 * @interface
 * @property {string} Title - The title of the movie.
 * @property {string} Description - The description of the movie.
 */
interface MovieData {
  Title: string;
  Description: string; // Add other properties as needed
}

/**
 * Angular component for displaying and interacting with movie favorites.
 * @class
 */
@Component({
  selector: 'app-favorites-dialog',
  templateUrl: './favorites-dialog.component.html',
  styleUrls: ['./favorites-dialog.component.scss'],
})
export class FavoritesDialogComponent {
  /**
   * Object representing movie data.
   * @public
   * @type {{ movie: MovieData }}
   * @memberof FavoritesDialogComponent
   */
  public data: { movie: MovieData } = { movie: { Title: '', Description: '' } };

  /**
   * Adds the current movie to the list of favorites.
   * @public
   * @memberof FavoritesDialogComponent
   */
  addToFavorites(): void {
    // Implement logic to add the movie to favorites
    // For now, let's just close the dialog
    this.dialogRef.close();
  }

  /**
   * Initializes the component.
   * @constructor
   * @public
   * @param {MatDialogRef<FavoritesDialogComponent>} dialogRef - Reference to the dialog.
   * @param {MAT_DIALOG_DATA} data - Data passed to the dialog.
   * @memberof FavoritesDialogComponent
   */
  constructor(
    public dialogRef: MatDialogRef<FavoritesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { movie: MovieData }
  ) {
    if (data) {
      this.data = data;
    }
  }

  /**
   * Closes the dialog.
   * @public
   * @memberof FavoritesDialogComponent
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
