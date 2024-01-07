import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * GenreComponent displays information about a movie genre.
 * @class
 */
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  /**
   * Constructor for the GenreComponent.
   * @constructor
   * @param data - Data containing genre information.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      description: string;
    }
  ) {}

  /**
   * Lifecycle hook called after the component is initialized.
   * @method
   */
  ngOnInit(): void {
    // Initialization logic can be added here if needed.
  }
}
