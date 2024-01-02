import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DirectorDetailsData {
  director: {
    name: string;
    description: string;
    // Add other properties as needed
  };
}

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss'],
})
export class DirectorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DirectorDetailsData) {}
}
