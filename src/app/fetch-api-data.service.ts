import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const apiUrl = ' https://movie-place-35ed6ca44a78.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public userRegistration(userDetails: any): Observable<any> {
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  public userLogin(credentials: any): Observable<any> {
    return this.http.post(apiUrl + 'login', credentials).pipe(
      catchError(this.handleError)
    );
  }

  public getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + 'movies').pipe(
      catchError(this.handleError)
    );
  }

  public getOneMovie(movieId: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/' + movieId).pipe(
      catchError(this.handleError)
    );
  }

  public getDirector(directorId: string): Observable<any> {
    return this.http.get(apiUrl + 'directors/' + directorId).pipe(
      catchError(this.handleError)
    );
  }

  public getGenre(genreId: string): Observable<any> {
    return this.http.get(apiUrl + 'genres/' + genreId).pipe(
      catchError(this.handleError)
    );
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get(apiUrl + 'users/' + userId).pipe(
      catchError(this.handleError)
    );
  }

  public getFavouriteMovies(userId: string): Observable<any> {
    return this.http.get(apiUrl + 'users/' + userId + '/favourite-movies').pipe(
      catchError(this.handleError)
    );
  }

  public addMovieToFavourites(userId: string, movieId: string): Observable<any> {
    return this.http.post(apiUrl + 'users/' + userId + '/favourite-movies', { movieId }).pipe(
      catchError(this.handleError)
    );
  }

  public editUser(userId: string, userDetails: any): Observable<any> {
    return this.http.put(apiUrl + 'users/' + userId, userDetails).pipe(
      catchError(this.handleError)
    );
  }

  public deleteUser(userId: string): Observable<any> {
    return this.http.delete(apiUrl + 'users/' + userId).pipe(
      catchError(this.handleError)
    );
  }

  public deleteMovieFromFavourites(userId: string, movieId: string): Observable<any> {
    return this.http.delete(apiUrl + 'users/' + userId + '/favourite-movies/' + movieId).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}

