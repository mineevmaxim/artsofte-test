import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CompanyListService} from "./services/company-list.service";
import {BehaviorSubject, Observable, take, tap} from "rxjs";
import {ICompany} from "./models/company.interface";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit {

  public companies: Observable<ICompany[]>;
  private _companies: BehaviorSubject<ICompany[]> = new BehaviorSubject<ICompany[]>([]);

  public constructor(
    private _router: Router,
    private _companyListService: CompanyListService
  ) {
    this._companies.next([]);
    this.companies = this._companies.asObservable();
  }

  ngOnInit(): void {
    this._companyListService.getCompanyList()
      .pipe(
        take(1),
      )
      .subscribe((res: ICompany[]) => {
        this._companies.next(res);
      });
  }
}
