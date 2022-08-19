import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IResponseListPeriod } from "@models/employee.interface";
import { Utils } from "@shared/utils/utils";

@Injectable({ providedIn: "root" })
export class EmployeeFormService {
  constructor(private fb: FormBuilder) {}

  buildEmployeeFormGroup(): FormGroup {
    return this.fb.group({
      id: [0],
      name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      surname: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      division: [
        null,
        Validators.compose([Validators.required, Utils.NotEmpty]),
      ],
      position: [
        null,
        Validators.compose([Validators.required, Utils.NotEmpty]),
      ],
      office: [null, Validators.compose([Validators.required, Utils.NotEmpty])],
      grade: [null, Validators.compose([Validators.required, Utils.NotEmpty])],
      beginDate: [new Date(), Validators.required],
      endDate: [null, Validators.required],
      birthday: [null, Validators.required],
      identificationNumber: [
        null,
        Validators.compose([Validators.required, Utils.NotEmpty]),
      ],
      baseSalary: [null],
      bonus : [{value: 0, disabled : true}],
      lstSalary: this.fb.array([]),
    });
  }

  buildPeriodsForm(period?: IResponseListPeriod): FormGroup {
    return this.fb.group({
      id: [period?.id || 0],
      year: [period?.year || null],
      month: [period?.month || null],
      period: [period?.period || null],
      baseSalary: [period?.baseSalary || 0],
      productionBonus: [period?.productionBonus || 0],
      compensationBonus: [period?.compensationBonus || 0],
      commission: [period?.commission || 0],
      contribution: [period?.contribution || 0],
      total: [period?.total || 0],
      isColorYellow: [period?.isColorYellow || false],
    });
  }
}
