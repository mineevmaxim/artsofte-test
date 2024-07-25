import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { CompanyListRoutingModule } from "./company-list-routing.module";
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanySortComponent } from './components/company-sort/company-sort.component';
import { CompanyFilterComponent } from './components/company-filter/company-filter.component';
import {CompanyListService} from "./services/company-list.service";



@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent
  ],
  imports: [
    CompanyListRoutingModule,
    CommonModule
  ],
  providers: [CompanyListService],
})
export class CompanyListModule { }
