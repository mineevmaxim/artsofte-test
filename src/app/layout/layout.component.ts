import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public constructor(private _router: Router) {}

  public navigateToCompanyList(): void {
    this._router.navigate(['/list']);
  }

  public navigateToCompanyYandexMap(): void {
    this._router.navigate(['/map']);
  }
}
