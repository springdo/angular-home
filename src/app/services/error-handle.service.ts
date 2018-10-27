import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ErrorHandleService {

  public genericErr (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('ERROR - ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `StatusCode ${error.status}, ` +
        `Body: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError({
      message: 'Oops! Something went wrong'
    });
  }
}
