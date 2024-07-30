import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {companyTypes, TCompanyType} from "../../../../shared/models/company-type.type";
import {ICompany} from "../../../../shared/models/company.interface";
import {BehaviorSubject, Observable, take} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.scss'
})
export class CompanyFilterComponent implements OnInit {
  @Input() public companies!: ICompany[];
  @Output() public setCompanies: EventEmitter<ICompany[]> = new EventEmitter<ICompany[]>();
  public industries$: Observable<string[]>;
  protected readonly companyTypes = companyTypes;
  private _industries = new BehaviorSubject<string[]>([]);

  public filterForm: FormGroup = new FormGroup({
    type: new FormControl<TCompanyType | ''>(''),
    industry: new FormControl<string>(''),
    search: new FormControl<string>(''),
  })

  public constructor() {
    this.industries$ = this._industries.asObservable();
  }

  public applyFilters(): void {
    let newCompanies: ICompany[] = this.companies;

    if (this.filterForm.controls['industry'].value) {
      newCompanies = newCompanies.filter((company) =>
        company.industry === this.filterForm.controls['industry'].value)
    }

    if (this.filterForm.controls['type'].value) {
      newCompanies = newCompanies.filter((company) =>
        company.type === this.filterForm.controls['type'].value)
    }

    if (this.filterForm.controls['search'].value) {
      newCompanies = newCompanies.filter((company) =>
        company.business_name.toLowerCase().includes(this.filterForm.controls['search'].value.toLowerCase()))
    }

    this.setCompanies.emit(newCompanies);
  }

  public ngOnInit(): void {
    if (this.companies) {
      const industries: string[] = [];

      this.companies.map(company => {
        if (!industries.includes(company.industry)) {
          industries.push(company.industry);
        }
      })
      this._industries.next(industries);
    }

    this.industries$
      .pipe(
        take(1))
      .subscribe();

    this.filterForm
      ?.valueChanges
      .subscribe(() => {
        this.applyFilters();
      })
  }
}
