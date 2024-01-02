// favorites-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface MovieData {
  Title: string;
  Description: string; // Add other properties as needed
}

@Component({
  selector: 'app-favorites-dialog',
  templateUrl: './favorites-dialog.component.html',
  styleUrls: ['./favorites-dialog.component.scss'],
})
export class FavoritesDialogComponent {
  public data: { movie: MovieData } = { movie: { Title: '', Description: '' } };

  // Rename the method to addToFavorites without 'Callback'
  addToFavorites(): void {
    // Implement logic to add the movie to favorites
    // For now, let's just close the dialog
    this.dialogRef.close();
  }

  constructor(
    public dialogRef: MatDialogRef<FavoritesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { movie: MovieData }
  ) {
    if (data) {
      this.data = data;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
