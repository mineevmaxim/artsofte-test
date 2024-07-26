import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailPage } from './company-detail.page';
import { CompanyDetailPageRoutingModule } from "./company-detail.page-routing.module";
import {CompanyDetailService} from "./services/company-detail.service";



@NgModule({
  declarations: [
    CompanyDetailPage
  ],
  imports: [
    CompanyDetailPageRoutingModule,
    CommonModule,
  ],
  providers: [CompanyDetailService],
})
export class CompanyDetailPageModule { }
