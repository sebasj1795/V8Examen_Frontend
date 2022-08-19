import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IResponseGetAllAction } from "src/app/models/action.interface";
import {
  IRequestBasePaginate,
  IResponseBase,
  IResponseBasePaginate,
} from "src/app/models/base/base-model.interface";
import { environment } from "src/environments/environment";

const APIUrl = `${environment.host}${environment.backendUrl}`;
const ACTION = `${APIUrl}/Action`;

@Injectable({ providedIn: "root" })
export class ActionApiService {
  constructor(private _httpClient: HttpClient) {}

  getAll(
    request: IRequestBasePaginate
  ): Observable<IResponseBase<IResponseBasePaginate<IResponseGetAllAction>>> {
    debugger;
    return this._httpClient.post<
      IResponseBase<IResponseBasePaginate<IResponseGetAllAction>>
    >(`${ACTION}/GetAll`, request);
  }
}
