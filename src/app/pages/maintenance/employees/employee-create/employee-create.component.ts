import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Item } from "@models/base/item.interface";
import {
  IGetByCodeResponse,
  IRequestCreateEmployee,
  IRequestListPeriod,
  IResponseListPeriod,
} from "@models/employee.interface";
import { EmployeeApiService } from "@services/apis/employee-api.service";
import { Utils } from "@shared/utils/utils";
import { Subject, takeUntil } from "rxjs";
import { EmployeeFormService } from "../employee-form-builder.service";

@Component({
  selector: "app-employee-create",
  templateUrl: "./employee-create.component.html",
  styleUrls: ["./employee-create.component.scss"],
})
export class EmployeeCreateComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<boolean>();
  public form: FormGroup;
  listDivisions: Item[] = [];
  listPositions: Item[] = [];
  listOffices: Item[] = [];
  listPeriods: IResponseListPeriod[] = [];
  code: string = "";
  restrictNumber = "[^0-9.]";
  minDate: Date = new Date();
  constructor(
    private employeeApiService: EmployeeApiService,
    private employeeFormService: EmployeeFormService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = employeeFormService.buildEmployeeFormGroup();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["code"]) {
        this.code = params["code"];
        this.getByCode();
      }
    });
    this.loadCombos();
    //this.onChangeEndDate();
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

  public onSubmit() {
    Utils.markFormGroupTouched(this.form);
    if (this.form.invalid) {
      //this.toastService.warning(AppConstants.MessageModal.COMPLETE_REQUIRED_FIELDS);
      return;
    } else {
      const request = this.mapFormToRequestCreate();
      console.log(request);
      this.employeeApiService
        .save(request)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response) => {
          if (response.code == 0) {
            const responseDto = response.data! as IGetByCodeResponse;
            setTimeout(() => {
              this.openSnackBar(response.message);
            }, 2500);
            this.redirectEdit(responseDto.code);
          } else if (response.code === 1) {
            this.openSnackBar(response.message, "Validation");
          }
        });
    }
  }

  private onChangeEndDate(): void {
    this.form
      .get("endDate")
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if (value) {
          this.getListPeriod();
        }
      });
  }

  private getListPeriod(): void {
    const { beginDate, endDate } = this.form.getRawValue();
    const requestPeriod = {
      codeEmployee: this.code,
      beginDate: beginDate,
      endDate: endDate,
    } as IRequestListPeriod;
    this.employeeApiService
      .getListPeriodByDates(requestPeriod)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response.code === 0) {
          this.listPeriods = response.data!;
          this.setFormPeriods(this.listPeriods);
        } else if (response.code === 1) {
          this.openSnackBar(response.message, "Validation");
        } else {
          this.openSnackBar(response.message, "Error");
        }
      });
  }

  private setFormPeriods(periods: IResponseListPeriod[]): void {
    this.lstSalary.clear();
    periods.forEach((element: IResponseListPeriod) => {
      if (element.id <= 0) {
        element.baseSalary = this.baseSalary;
      }
      let newMaterial = this.employeeFormService.buildPeriodsForm(element);
      this.lstSalary.push(newMaterial);
    });
  }

  private getByCode(): void {
    this.employeeApiService
      .getByCode(this.code)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response.data) {
          this.mapEditToForm(response.data);
        }
      });
  }

  private mapFormToRequestCreate(): IRequestCreateEmployee {
    const formValues = { ...this.form.getRawValue() };
    const {
      name,
      surname,
      division,
      position,
      grade,
      office,
      beginDate,
      birthday,
      identificationNumber,
      baseSalary,
      lstSalary,
    } = formValues;

    const model = {
      code: this.code,
      name: name,
      surname: surname,
      division: division,
      position: position,
      grade: grade,
      office: office,
      beginDate: beginDate,
      birthday: birthday,
      identificationNumber: identificationNumber,
      baseSalary: baseSalary,
      lstSalary: lstSalary,
    } as IRequestCreateEmployee;
    return model;
  }

  private mapEditToForm({
    code,
    name,
    surname,
    division,
    position,
    grade,
    office,
    beginDate,
    endDate,
    birthday,
    identificationNumber,
    baseSalary,
    lstSalary,
    bonus,
  }: IGetByCodeResponse): void {
    this.lstSalary.clear();
    this.form.patchValue({
      code: code,
      name: name,
      surname: surname,
      division: division,
      position: position,
      grade: grade,
      office: office,
      beginDate: beginDate,
      endDate: endDate,
      birthday: birthday,
      identificationNumber: identificationNumber,
      baseSalary: baseSalary,
      bonus: bonus,
    });

    lstSalary.forEach((element: IResponseListPeriod) => {
      let period = this.employeeFormService.buildPeriodsForm(element);
      this.lstSalary.push(period);
    });
  }

  get lstSalary() {
    return this.form.get("lstSalary") as FormArray;
  }

  get baseSalary() {
    return this.form.get("baseSalary")?.value;
  }

  redirectBack(): void {
    this.router.navigate([`/maintenance/employee-list`]);
  }

  redirectEdit(code: string): void {
    this.router.navigate([`/maintenance/employee-edit/${code}`]);
  }

  openSnackBar(message: string, action: string = "Ok") {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onChangeEvent(event: any) {
    this.getListPeriod();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
