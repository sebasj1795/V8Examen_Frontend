import { AbstractControl, FormGroup } from "@angular/forms";
import { IRequestPaginatePrimeNG } from "@models/base/primeNG.interface";
import { LazyLoadEvent } from "primeng/api";

export class Utils {
  static convertRqtPaginatePrimeNG(
    event: LazyLoadEvent
  ): IRequestPaginatePrimeNG {
    const page = new IRequestPaginatePrimeNG(
      event.first,
      event.rows,
      event.sortOrder,
      event.sortField,
      event.filters,
      event.globalFilter!
    );
    return page;
  }

  static NotEmpty(control: AbstractControl): { [key: string]: any } | null {
    if (typeof control?.value === "string" && control?.value?.trim() === "") {
      return { notEmpty: true };
    }
    return null;
  }

  static markFormGroupTouched = (formGroup: FormGroup): void => {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  };
}
