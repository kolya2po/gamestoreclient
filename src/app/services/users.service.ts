import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user/user";
import {RegistrationModel} from "../models/user/registrationModel";
import {UserDto} from "../models/user/userDto";
import {LoginModel} from "../models/user/loginModel";
import {CookieService} from "ngx-cookie-service";
import {RouterExtensionService} from "./router-extension.service";
import {Router} from "@angular/router";
import {catchError, tap} from "rxjs";
import {ImagePathDto} from "../models/imagePathDto";
import {CartService} from "./cart.service";
import {USERS_URLS} from "../routes/api-routes";
import {SnackBarService} from "./snack-bar.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User = new User();
  isLoggedIn = false;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private routeExt: RouterExtensionService,
              private router: Router,
              private snackBar: SnackBarService,
              private cs: CartService)
  {
    if (cookieService.get('id')) {
      let id = +cookieService.get('id');
      this.getById(id)
        .subscribe(u => {
          this.user = u;
          this.isLoggedIn = true;
        });
    }
  }

  public getById(id: number) {
    return this.http.get<User>(`${USERS_URLS.DEFAULT_URL}/${id}`)
  }

  public addAvatar(image: File) {
    const formData = new FormData();
    formData.append('avatar', image);
    return this.http.post<ImagePathDto>(`${USERS_URLS.DEFAULT_URL}/${this.user.id}/avatar`, formData);
  }

  public register(model: RegistrationModel) {
    return this.http.post<UserDto>(USERS_URLS.REGISTER, model)
      .pipe(tap(() => {
      }), catchError((err) => {
        let resp = new HttpErrorResponse(err);
        this.snackBar.openSnackBar(resp.error);
        throw err;
      }))
      .subscribe(dto => {
        this.saveToCookies(dto);
        this.cookieService.delete('orderId');
        this.handleReturnedDto(dto);
        this.cs.update().subscribe(() => {
          this.cs.get();
        });
        this.isLoggedIn = true;

        this.router.navigate(['']);
      });
  }

  public login(model: LoginModel) {
    return this.http.post<UserDto>(USERS_URLS.LOGIN, model)
      .pipe(tap(() => {
      }), catchError((err) => {
        let resp = new HttpErrorResponse(err);
        this.snackBar.openSnackBar(resp.error);
        throw err;
      }))
      .subscribe((dto) => {
        this.clearCookiesAndStorage();
        if (model.isPersistent) {
          this.saveToCookies(dto);
        }
        this.handleReturnedDto(dto);
        this.cs.get();
        this.isLoggedIn = true;

        this.routeExt.navigateToPrev();
      });
  }

  logout() {
    return this.http.get(USERS_URLS.LOGOUT)
      .subscribe(() => {
        this.user = new User();
        this.clearCookiesAndStorage();
        this.cs.get();
        this.isLoggedIn = false;
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

  clearCookiesAndStorage() {
    this.cookieService.deleteAll();
    localStorage.clear();
  }
}
