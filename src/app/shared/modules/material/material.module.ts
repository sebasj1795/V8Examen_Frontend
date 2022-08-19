import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSliderModule} from '@angular/material/slider'
import {MatSortModule} from '@angular/material/sort'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTableModule} from '@angular/material/table'
import {MatBadgeModule} from '@angular/material/badge'
import {MatStepperModule} from '@angular/material/stepper'
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [],
  imports: [
    MatSliderModule
  ],
  exports: [
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatOptionModule,
    MatStepperModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatBadgeModule,
  ]
})
export class MaterialModule { }
