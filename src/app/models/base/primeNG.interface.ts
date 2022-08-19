export class IRequestPaginatePrimeNG {
  constructor(
    public first: number = 0,
    public rows: number = 10,
    public sortOrder: number = 1,
    public sortField: string = "",
    public filters: any,
    public globalFilter: any
  ) {}
}


export interface IResponsePaginate<T> {
  entities: T[];
  count: number;
}
