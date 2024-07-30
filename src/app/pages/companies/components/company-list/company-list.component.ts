import { Component, Input } from '@angular/core';
import {ICompany} from "../../../../shared/models/company.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  @Input() public companies$!: Observable<ICompany[]>;
}
