import {Component, OnInit} from '@angular/core';
import {CompanyDetailService} from "./services/company-detail.service";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs";
import {ICompany} from "../../shared/models/company.interface";

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.page.html',
    styleUrl: './company-detail.page.scss'
})
export class CompanyDetailPage implements OnInit {
    public id: number | undefined;
    public company: ICompany | undefined;

    public constructor(private _companyDetailService: CompanyDetailService, private _route: ActivatedRoute) {
        this._route.params
            .subscribe(params => this.id = params['id']);
    }

    ngOnInit(): void {
        this._companyDetailService.getCompanyDetails(this.id)
            ?.pipe(
                tap((res: ICompany) => {
                    this.company = res;
                })
            )
            ?.subscribe()
    }
}
