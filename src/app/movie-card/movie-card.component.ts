import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenreComponent } from '../genre/genre.component';
import { FavoritesDialogComponent } from '../favorites-dialog/favorites-dialog.component';
import { DirectorComponent } from '../director/director.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router // Inject the Router
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
    });
  }

  openGenre(genres: any[]): void {
    const dialogRef = this.dialog.open(GenreComponent, {
      data: {
        name: 'Genres',
        description: genres.map((genre) => genre.name).join(', '),
      },
      width: '400px',
    });
  }

  openAddFavorites(movie: any): void {
    this.dialog.open(FavoritesDialogComponent, {
      data: { movie },
      width: '400px',
    });
  }


  showAddToFavoritesButton(movie: any): boolean {
    // Implement the condition to determine whether to show the "Add to Favorites" button
    // For example, check if the movie is not already in favorites
    // You can customize this logic based on your requirements
    return true;
  }


  openDirector(name: string, description: string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        director: {
          director: name,
          description: description,
        }
      },
      width: '400px',
    });
  }
  openSynopsis(Title: string, Description: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        Title: Title,
        Description: Description,
      },
      width: '400px',
    });
  }


  // Navigate to the welcome view
  goToWelcome(): void {
    this.router.navigate(['/welcome']);
  }

  // Navigate to the profile view
  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
