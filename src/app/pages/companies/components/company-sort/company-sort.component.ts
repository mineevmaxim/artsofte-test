import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICompany} from "../../../../shared/models/company.interface";
import {Observable, take, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {SortOrder} from "./models/sort-order.enum";
import {Sort} from "./models/sort.enum";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.scss'
})
export class CompanySortComponent implements OnInit {
  @Input() public companies$!: Observable<ICompany[]>;
  @Output() public setCompanies = new EventEmitter<ICompany[]>();
  public sortForm = new FormGroup({
    order: new FormControl<SortOrder>(SortOrder.asc),
    sort: new FormControl<Sort>(Sort.name),
  })

  public applySort(companies: ICompany[]): ICompany[] {
    let newCompanies: ICompany[] = companies;

    switch (this.sortForm.controls['sort'].value) {
      case 'name':
        newCompanies = newCompanies.sort((a: ICompany, b: ICompany) => {
          return a.business_name.localeCompare(b.business_name) * this.sortForm.controls['order'].value!;
        });
        break;
      case 'type':
        newCompanies = newCompanies.sort((a: ICompany, b: ICompany) => {
          return a.type.localeCompare(b.type) * this.sortForm.controls['order'].value!;
        });
        break;
      case 'industry':
        newCompanies = newCompanies.sort((a: ICompany, b: ICompany) => {
          return a.industry.localeCompare(b.industry) * this.sortForm.controls['order'].value!;
        });
        break;
    }

    console.log('called');
    return newCompanies;
  }

  public constructor() {
  }

  ngOnInit(): void {
    this.companies$
      .pipe(
        tap((companies: ICompany[]) => {
          const newCompanies = this.applySort(companies);
          this.setCompanies.emit(newCompanies);
        })
      )
      .subscribe();

    this.sortForm.valueChanges
      .subscribe(() => {
        let companies: ICompany[] = [];
        this.companies$
          .pipe(take(1))
          .subscribe((res) => {
            companies = res;
          })
        this.applySort(companies);
      })
  }

  protected readonly SortOrder = SortOrder;
}
