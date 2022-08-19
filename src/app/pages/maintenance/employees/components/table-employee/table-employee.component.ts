import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "@models/base/item.interface";
import { IRequestPaginatePrimeNG } from "@models/base/primeNG.interface";
import {
  IRequestListPaginateEmployee,
  IResponseListPaginateEmployee,
} from "@models/employee.interface";
import { EmployeeApiService } from "@services/apis/employee-api.service";
import { Utils } from "@shared/utils/utils";
import { LazyLoadEvent } from "primeng/api";
import { Subject, takeUntil } from "rxjs";
@Component({
  selector: "app-table-employee",
  templateUrl: "./table-employee.component.html",
  styleUrls: ["./table-employee.component.scss"],
})
export class TableEmployeeComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();
  listDivisions: Item[] = [];
  listPositions: Item[] = [];
  listOffices: Item[] = [];
  listEmployees: IResponseListPaginateEmployee[] = [];
  paramRequestPaginate: IRequestPaginatePrimeNG = {} as any;
  totalRecords: number = 10;
  loadingGrid: boolean = false;
  hasFilter: boolean = false;
  typeFilterButton: number = 0;
  @ViewChild("txtidemployeeref", { static: true }) IdEmployeeRef!: ElementRef;
  @ViewChild("txtnameemployeeref", { static: true })
  NameEmployeeRef!: ElementRef;
  constructor(
    private employeeApiService: EmployeeApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCombos();
  }

  private loadCombos(): void {
    this.employeeApiService
      .getListCombo()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.listDivisions = response.data?.divisions!;
        this.listPositions = response.data?.positions!;
        this.listOffices = response.data?.offices!;
      });
  }

  loadLazy(event: LazyLoadEvent) {
    this.paramRequestPaginate = Utils.convertRqtPaginatePrimeNG(event);
    this.loadEmployees();
  }

  private loadEmployees(): void {
    const request = {
      idEmployeeFilter: Number(this.IdEmployeeRef.nativeElement.value ?? 0),
      typeFilter: this.typeFilterButton,
      pagination: this.paramRequestPaginate,
    } as IRequestListPaginateEmployee;
    this.loadingGrid = true;
    this.employeeApiService
      .getAll(request)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        this.listEmployees = response?.data?.entities!;
        this.totalRecords = response?.data?.count!;
        this.loadingGrid = false;
      });
  }

  redirectEdit(row?: any): void {
    this.router.navigate([`/maintenance/employee-edit/${row.code}`]);
  }

  selecteEmployeeReference(row?: any): void {
    this.hasFilter = true;
    this.IdEmployeeRef.nativeElement.value = row.id;
    this.NameEmployeeRef.nativeElement.value = row.nameComplete;
  }

  btnFilter(type: number): void {
    this.typeFilterButton = type;
    this.loadEmployees();
  }

  removeFilter(): void {
    this.hasFilter = false;
    this.IdEmployeeRef.nativeElement.value = 0;
    this.NameEmployeeRef.nativeElement.value = "";
    this.loadEmployees();
  }

  onClearDate(property: string): void {
    const params = { ...this.paramRequestPaginate };
    params.filters[property] = { value: null, matchMode: "dateIs" };
    this.loadLazy(params);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
