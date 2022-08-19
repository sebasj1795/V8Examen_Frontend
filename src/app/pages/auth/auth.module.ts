import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { SharedFormsModule } from 'src/app/shared/modules/forms/forms.module';
import { LoaderPrincipalModule } from 'src/app/shared/components/loader-principal/loader-principal.module';



@NgModule({
  declarations: [
    LoginComponent,
    ResetComponent
  ],
  imports: [
    //MaterialModule,
    SharedFormsModule,
    LoaderPrincipalModule
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
