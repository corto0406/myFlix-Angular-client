import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenreComponent } from '../genre/genre.component';
import { FavoritesDialogComponent } from '../favorites-dialog/favorites-dialog.component';
import { DirectorComponent } from '../director/director.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

/**
 * MovieCardComponent displays movie information and provides interaction options.
 * @class
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  /**
   * Input decorator to receive an array of movies from the parent component.
   * @type {Array}
   */
  @Input() movies: any[] = [];
  favoriteMovies: string[] = [];

  /**
   * Constructor for the MovieCardComponent.
   * @constructor
   * @param fetchApiData - Service for fetching API data.
   * @param dialog - Angular Material dialog service.
   * @param snackBar - Angular Material snackbar service.
   * @param router - Angular router service.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  /**
   * Lifecycle hook called after the component is initialized.
   * @method
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Fetches all movies from the API.
   * @method
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
    });
  }

  /**
   * Opens a dialog to display genres.
   * @method
   * @param genres - Array of genres.
   */
  openGenre(genres: any[]): void {
    this.dialog.open(GenreComponent, {
      data: {
        name: 'Genres',
        description: genres
      },
      width: '400px',
    });
  }

  /**
   * Opens a dialog to add a movie to favorites.
   * @method
   * @param movie - Movie data.
   */
  openAddFavorites(movie: any): void {
    this.dialog.open(FavoritesDialogComponent, {
      data: { movie },
      width: '400px',
    });
  }

  /**
   * Checks if a movie is already a favorite.
   * @method
   * @param movieId - Movie ID.
   * @returns {boolean} - True if the movie is a favorite, false otherwise.
   */
  isFavoriteMovie(movieId: string): boolean {
    return this.favoriteMovies.includes(movieId);
  }

  /**
   * Toggles the favorite status of a movie.
   * @method
   * @param movieId - Movie ID.
   */
  toggleFavoriteMovie(movieId: string): void {
    if (this.isFavoriteMovie(movieId)) {
      // Remove from favorites
      this.favoriteMovies = this.favoriteMovies.filter((id) => id !== movieId);
    } else {
      // Add to favorites
      this.favoriteMovies.push(movieId);
    }
  }

  // ... Additional methods for opening dialogs

  /**
   * Navigates to the welcome page.
   * @method
   */
  goToWelcome(): void {
    this.router.navigate(['/welcome']);
  }

  /**
   * Navigates to the user profile page.
   * @method
   */
  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
