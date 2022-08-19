import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';

/*Config Scroll*/
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};

@NgModule({
    imports: [
        TranslateModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        PrimengModule,
        FlexLayoutModule, /*Responsive*/
        PerfectScrollbarModule, /*Scroll*/
        TranslateModule /*Idioma*/
    ],
    declarations: [],
    providers: [
        /*Scroll*/
        { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
})
export class SharedFormsModule { }
