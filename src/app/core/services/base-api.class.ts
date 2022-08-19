import { HttpClient } from '@angular/common/http';
import { utils } from '@shared/utils/utils-url';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseCrudApi<
	RequestUpdateCreate,
	ResponseUpdateCreate,
	ResponsetDelete,
	ResponseAll,
	ResponseFindById
> {
	private readonly APIUrl = `${environment.host}${environment.api}${this.getResourceUrl()}`;

	abstract getResourceUrl(): string;

	constructor(protected _httpClient: HttpClient) {}

	create(requestData: RequestUpdateCreate): Observable<ResponseUpdateCreate> {
		return this._httpClient.post<ResponseUpdateCreate>(this.APIUrl, requestData);
	}

	update(id: number, requestData: Partial<RequestUpdateCreate>): Observable<ResponseUpdateCreate> {
		const url = `${this.APIUrl}/${id}`;
		return this._httpClient.put<ResponseUpdateCreate>(url, requestData);
	}

	delete(id: number): Observable<ResponsetDelete> {
		const url = `${this.APIUrl}/${id}`;
		return this._httpClient.delete<ResponsetDelete>(url);
	}

	// findAll(request?: IRequestListAll): Observable<ResponseAll> {
	// 	const url = utils.concatQueryUrl(`${this.APIUrl}`, request);
	// 	return this._httpClient.get<ResponseAll>(url);
	// }

	findById(id: number): Observable<ResponseFindById> {
		const url = `${this.APIUrl}/${id}`;
		return this._httpClient.get<ResponseFindById>(url);
	}
}