import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponseBase } from "@models/base/base-model.interface";
import {
  IGetByCodeResponse,
  IRequestCreateEmployee,
  IRequestListPaginateEmployee,
  IRequestListPeriod,
  IResponseListCombos,
  IResponseListPaginateEmployee,
  IResponseListPeriod,
} from "src/app/models/employee.interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IResponsePaginate } from "@models/base/primeNG.interface";

const APIUrl = `${environment.host}${environment.backendUrl}`;
const EMPLOYEE = `${APIUrl}/Employee`;

@Injectable({ providedIn: "root" })
export class EmployeeApiService {
  constructor(private _httpClient: HttpClient) {}

  getAll(
    request: IRequestListPaginateEmployee
  ): Observable<
    IResponseBase<IResponsePaginate<IResponseListPaginateEmployee>>
  > {
    const url = `${EMPLOYEE}/GetAll`;
    return this._httpClient.post<
      IResponseBase<IResponsePaginate<IResponseListPaginateEmployee>>
    >(url, request);
  }

  getListCombo(): Observable<IResponseBase<IResponseListCombos>> {
    const url = `${EMPLOYEE}/GetListCombo`;
    return this._httpClient.get<IResponseBase<IResponseListCombos>>(url);
  }

  getListPeriodByDates(
    request: IRequestListPeriod
  ): Observable<IResponseBase<IResponseListPeriod[]>> {
    const url = `${EMPLOYEE}/GetListPeriod`;
    return this._httpClient.post<IResponseBase<IResponseListPeriod[]>>(
      url,
      request
    );
  }

  getByCode(code: string): Observable<IResponseBase<IGetByCodeResponse>> {
    const url = `${EMPLOYEE}/GetByCode/${code}`;
    return this._httpClient.get<IResponseBase<IGetByCodeResponse>>(url);
  }

  save(
    request: IRequestCreateEmployee
  ): Observable<IResponseBase<IGetByCodeResponse>> {
    const typeAction = request.code ? "Update" : "Create";
    const url = `${EMPLOYEE}/${typeAction}`;
    if (request.code) {
      return this._httpClient.put<IResponseBase<IGetByCodeResponse>>(
        url,
        request
      );
    } else {
      return this._httpClient.post<IResponseBase<IGetByCodeResponse>>(
        url,
        request
      );
    }
  }

  create(
    request: IRequestCreateEmployee
  ): Observable<IResponseBase<IGetByCodeResponse[]>> {
    const url = `${EMPLOYEE}/Create`;
    return this._httpClient.post<IResponseBase<IGetByCodeResponse[]>>(
      url,
      request
    );
  }

  update(
    request: IRequestCreateEmployee
  ): Observable<IResponseBase<IGetByCodeResponse[]>> {
    const url = `${EMPLOYEE}/Update`;
    return this._httpClient.post<IResponseBase<IGetByCodeResponse[]>>(
      url,
      request
    );
  }
}
