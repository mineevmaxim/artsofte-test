import { Component, Input } from '@angular/core';
import { ICompany } from "../../../../../../shared/models/company.interface";
import { Router } from "@angular/router";

@Component({
    selector: 'app-company-item',
    templateUrl: './company-item.component.html',
    styleUrl: './company-item.component.scss'
})
export class CompanyItemComponent {
  @Input() public company!: ICompany;

  public constructor(private _router: Router) {
  }

  public navigateToCompanyDetail(): void {
      this._router.navigate([`detail/${this.company.id}`])
  }
}
