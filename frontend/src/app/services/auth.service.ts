import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAuthUser } from '../pages/types/user.interface';
import { catchError, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {}

  signUp(userData: IAuthUser){
    return this.http.post(`http://localhost:3001/user`, userData)
    .pipe(
      catchError(err => {
        this.handleError(err)
        throw new Error(err.message)
      })
    )
    .subscribe(() => this.toastr.success('аккаунт успешно создан'))
  }
  private handleError(err: HttpErrorResponse): void {
    this.toastr.error(err.error.message)
  }
}
