import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * DirectorComponent displays information about a director.
 * @class
 */
@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {
  /**
   * Constructor for the DirectorComponent.
   * @constructor
   * @param data - Data containing director information.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      bio: string;
      birth_year: string;
      death_year: string;
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
