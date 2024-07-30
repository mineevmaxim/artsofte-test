import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, take } from "rxjs";
import { ICompany } from "../../shared/models/company.interface";
import { Router } from "@angular/router";
import { CompanyListService } from "./services/company-list.service";

@Component({
  selector: 'app-companies.page',
  templateUrl: './companies.page.html',
  styleUrl: './companies.page.scss'
})

export class CompaniesPage implements OnInit {
  public companies$: Observable<ICompany[]>;
  public initialCompanies: ICompany[] = [];
  private _companies$: BehaviorSubject<ICompany[]> = new BehaviorSubject<ICompany[]>([]);

  public constructor(
    private _router: Router,
    private _companyListService: CompanyListService
  ) {
    this._companies$.next([]);
    this.companies$ = this._companies$.asObservable();
  }

  public setCompanies(companies: ICompany[]): void {
    this._companies$.next(companies);
    console.log('called');
  }

  ngOnInit(): void {
    this._companyListService.getCompanyList()
      .pipe(
        take(1),
      )
      .subscribe((res: ICompany[]) => {
        this.initialCompanies = res;
        this._companies$.next(res);
      });
  }
}
