import { Injectable } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { IRequesLogin } from "src/app/models/login.interface";
import { LoginApiService } from "src/app/services/apis/login-api.service";
import { SessionStorageService } from "src/app/services/local/storage/session-storage.service";
import { PATHS_DASHBOARD_PAGES } from "src/app/shared/utils/path-page";

@Injectable() //{ providedIn: "root" }
export class LoginFlowService {
    formGroup!: FormGroup;
    showLoader = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _loginService: LoginApiService,
        private _sessionStorageService: SessionStorageService) { }

    loadFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            username: ["jsebas", Validators.required],
            password: ["Sigcomt2021#", Validators.required],
        });
    }

    onSubmit(): void {
        debugger;
        if (this.formGroup.valid) {
            this.showLoader = true;
            void this._router.navigateByUrl(PATHS_DASHBOARD_PAGES.withSlash);
            // const sendUser = this.formGroup.value as IRequesLogin;
            // this._loginService
            // 	.login(sendUser)
            // 	.pipe(
            // 		finalize(() => {
            // 			this.showLoader = false;
            // 		})
            // 	)
            // 	.subscribe((data) => {
            // 		void this._router.navigateByUrl(PATHS_DASHBOARD_PAGES.withSlash);
            // 	});
        }
    }

    // private _saveDataUser(response: IResponseLogin): void {
    //     const token: ITokenUser = { token: response.token, expiredDate: response.expiredDate };
    //     const dataUser: IDataUser = {
    //         userId: response.userId,
    //         userCode: response.userCode,
    //         fullName: response.fullName,
    //         modules: response.modules,
    //         customerId: response.customerId
    //     };
    //     this._sessionStorageService.setItem(KEYS_WEB_STORAGE.TOKEN_USER, token);
    //     this._sessionStorageService.setItem(KEYS_WEB_STORAGE.DATA_USER, dataUser);
    // }

    get userNameField(): AbstractControl {
        return this.formGroup.get('username')!;
    }

    get passwordField(): AbstractControl {
        return this.formGroup.get('password')!;
    }


}
