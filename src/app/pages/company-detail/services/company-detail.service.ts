import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ICompany } from "../../../shared/models/company.interface";

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  public constructor(private _http: HttpClient) {}

  public getCompanyDetails(id: number | undefined): Observable<ICompany> | null {
    if (!id) return null;

    return this._http.get<ICompany>('https://random-data-api.com/api/company/random_company', {
      params: {
        id: id
      },
    })
  }
}
