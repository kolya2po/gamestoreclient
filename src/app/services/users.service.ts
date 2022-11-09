import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user/user";
import {RegistrationModel} from "../models/user/registrationModel";
import {UserDto} from "../models/user/userDto";
import {LoginModel} from "../models/user/loginModel";
import {CookieService} from "ngx-cookie-service";
import {RouterExtensionService} from "./router-extension.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, tap} from "rxjs";
import {ImagePathDto} from "../models/imagePathDto";
import {CartService} from "./cart.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://localhost:5001/api/users';
  user: User = new User();

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private routeExt: RouterExtensionService,
              private router: Router,
              private snackBar: MatSnackBar,
              private cs: CartService)
  {
    if (cookieService.get('id')) {
      let id = +cookieService.get('id');
      this.getById(id)
        .subscribe(u => this.user = u);
    }
  }

  public getById(id: number) {
    return this.http.get<User>(`${this.url}/${id}`)
  }

  public addAvatar(image: File) {
    const formData = new FormData();
    formData.append('avatar', image);
    return this.http.post<ImagePathDto>(`${this.url}/${this.user.id}/avatar`, formData);
  }

  public register(model: RegistrationModel) {
    return this.http.post<UserDto>(this.url + '/register', model)
      .pipe(tap(() => {
      }), catchError((err) => {
        let resp = new HttpErrorResponse(err);
        this.openSnackBar(resp.error);
        throw err;
      }))
      .subscribe(dto => {
        this.clearCookiesAndStorage();
        this.saveToCookies(dto);
        this.handleReturnedDto(dto);
        this.cs.get();
        this.router.navigate(['']);
      });
  }

  public login(model: LoginModel) {
    return this.http.post<UserDto>(`${this.url}/login`, model)
      .pipe(tap(() => {
      }), catchError((err) => {
        let resp = new HttpErrorResponse(err);
        this.openSnackBar(resp.error);
        throw err;
      }))
      .subscribe((dto) => {
        this.clearCookiesAndStorage();
        if (model.isPersistent) {
          this.saveToCookies(dto);
        }
        this.handleReturnedDto(dto);
        this.cs.get();
        this.routeExt.navigateToPrev();
      });
  }

  logout() {
    return this.http.get(`${this.url}/sign-out`)
      .subscribe(() => {
        this.user = new User();
        this.clearCookiesAndStorage();
        this.cs.get();
        this.router.navigate(['/'])
      });
  }

  handleReturnedDto(dto: UserDto) {
    if (dto === null) {
      return;
    }
    localStorage.setItem('auth_token', dto.token);

    this.getById(dto.userId)
      .subscribe(u => {
        this.user = u;
      });
  }

  saveToCookies(dto: UserDto) {
    if (dto === null) {
      return;
    }
    this.cookieService.set('auth_token', dto.token!,
      new Date(new Date().setHours(new Date().getHours() + 3)));
    this.cookieService.set('id', dto.userId.toString());
  }

  openSnackBar(message: any) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }

  clearCookiesAndStorage() {
    this.cookieService.deleteAll();
    localStorage.clear();
  }
}
