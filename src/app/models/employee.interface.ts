import { Item } from "./base/item.interface";
import { IRequestPaginatePrimeNG } from "./base/primeNG.interface";

export interface IRequestCreateEmployee {
  code: string;
  name: string;
  surname: string;
  division: string;
  position: string;
  grade: string;
  office: string;
  beginDate: Date;
  birthday: Date;
  identificationNumber: number;
  baseSalary: number;
  lstSalary: IResponseListPeriod[];
}

export interface IResponseCreateEmployee {}

export interface IRequestListPaginateEmployee {
  idEmployeeFilter: number;
  typeFilter: number;
  pagination: IRequestPaginatePrimeNG;
}

export interface IResponseListPaginateEmployee {
  id: number;
  code: string;
  nameComplete: string;
  division: string;
  grade: string;
  beginDate: Date;
  birtday: Date;
  identification: string;
  baseSalary: number;
  commission: number;
  compensationBonus: number;
  productionBonus: number;
  otherIncome: number;
  contributions: number;
  totalSalary: number;
}

export interface IResponseListCombos {
  divisions: Item[];
  positions: Item[];
  offices: Item[];
}

export interface IRequestListPeriod {
  codeEmployee: string;
  beginDate: Date;
  endDate: Date;
}

export interface IResponseListPeriod {
  id : number;
  month: string;
  year: number;
  period: Date;
  baseSalary: number;
  productionBonus: number;
  compensationBonus: number;
  commission: number;
  contribution: number;
  total : number;
  isColorYellow : boolean;
}

export interface IGetByCodeResponse extends IRequestCreateEmployee {
  endDate: Date;
  bonus : number;
}
