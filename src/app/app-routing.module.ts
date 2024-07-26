import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./pages/companies/companies.page.module').then(m => m.CompaniesPageModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/company-yandex-map/company-yandex-map.page.module').then(m => m.CompanyYandexMapPageModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/company-detail/company-detail.page.module').then(m => m.CompanyDetailPageModule),
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
