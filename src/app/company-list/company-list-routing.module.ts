import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CompanyListComponent} from "./company-list.component";

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CompanyListRoutingModule { }
