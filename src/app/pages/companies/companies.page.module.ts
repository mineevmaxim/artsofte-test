import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesPage } from './companies.page';
import {CompanyListModule} from "./components/company-list/company-list.module";
import { CompanySortComponent } from './components/company-sort/company-sort.component';
import { CompanyFilterComponent } from './components/company-filter/company-filter.component';
import {CompanyListService} from "./services/company-list.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CompaniesPage,
    CompanySortComponent,
    CompanyFilterComponent
  ],
  imports: [
    CommonModule,
    CompanyListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CompanyListService]
})
export class CompaniesPageModule { }
