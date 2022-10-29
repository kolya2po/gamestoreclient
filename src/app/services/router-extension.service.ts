import { Injectable } from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import {filter, pairwise} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouterExtensionService {
  private previousUrl: string = '';

  constructor(public router : Router) {
    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        this.previousUrl = events[0].urlAfterRedirects;
      });
  }

  public navigateToPrev(){
    this.router.navigate([this.previousUrl]);
  }
}
