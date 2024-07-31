import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICompany } from "../../../shared/models/company.interface";

@Injectable({
    providedIn: 'root'
})
export class CompanyListService {

    public constructor(private _http: HttpClient) {}

    public getCompanyList(): Observable<ICompany[]> {
        return this._http.get<ICompany[]>('https://random-data-api.com/api/company/random_company', {
            params: {
                size: 50,
            }
        });
    }
}
