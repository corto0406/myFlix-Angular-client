import { Component, OnInit, Input } from '@angular/core';
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
  @Input() movies: any[] = [];
  favoriteMovies: string[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

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
    return !this.isFavoriteMovie(movie._id);
  }

  isFavoriteMovie(movieId: string): boolean {
    return this.favoriteMovies.includes(movieId);
  }

  toggleFavoriteMovie(movieId: string): void {
    if (this.isFavoriteMovie(movieId)) {
      // Remove from favorites
      this.favoriteMovies = this.favoriteMovies.filter((id) => id !== movieId);
    } else {
      // Add to favorites
      this.favoriteMovies.push(movieId);
    }
  }
  openDirector(director: any): void {
    this.dialog.open(DirectorComponent, {
      data: {
        director: {
          director: director.name,
          description: director.description,
        },
      },
      width: '400px',
    });
  }

  openSynopsis(title: string, description: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        title: title,
        description: description,
      },
      width: '400px',
    });
  }

  goToWelcome(): void {
    this.router.navigate(['/welcome']);
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
