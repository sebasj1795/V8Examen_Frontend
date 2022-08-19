//#region
export interface IResponseBase<T> {
  data?: T;
  message: string;
  code: number;
}
//#endregion

//#region  Modelos para el endpoint de get all
// export class IRequestBasePaginate {
//   constructor(
//     public page: number = 0,
//     public size: number = 10,
//     public columnOrder?: string,
//     public order?: number,
//     public filter?: any
//   ) {}
// }

// export interface IResponsePaginate<T> {
//   entities: T[];
//   count: number;
// }
//#endregion
