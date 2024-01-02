// genre.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface GenreDetailsData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: GenreDetailsData) {}
}
