import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
})
export class DemoComponent implements OnInit {
  codeSelected: string = "";
  isCodeValid: boolean = false;
  myControl = new FormControl();
  formGroup!: FormGroup;
  options: IDemo[] = [
    { code: "123", name: "Producto1" },
    { code: "456", name: "Producto2" },
    { code: "789", name: "Producto3" },
  ];
  filteredOptions!: Observable<IDemo[]>;

  ngOnInit() {
    this.changeControl();
  }

  private changeControl() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: any): IDemo[] {
    debugger;
    this.isCodeValid = false;
    let filterValue = "";
    if (value?.code) {
      filterValue = value.code.toLowerCase();
    } else {
      filterValue = value.toLowerCase();
    }

    return this.options.filter(
      (option) =>
        option.code.toLowerCase().includes(filterValue) ||
        option.name.toLowerCase().includes(filterValue)
    );
  }

  onSelectionChanged(event: any) {
    debugger;
    const value = event.option.value;
    this.codeSelected = value.code;
    this.myControl.setValue(value.name);
    this.isCodeValid = true;
  }

  clearFilter(): void {
    this.myControl.setValue("");
  }
}

export interface IDemo {
  code: string;
  name: string;
}
