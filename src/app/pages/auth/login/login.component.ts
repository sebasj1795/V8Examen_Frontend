import { Component, OnInit } from '@angular/core';
import { LoginFlowService } from 'src/app/business/auth-flow/login-flow.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginFlowService]
})
export class LoginComponent implements OnInit {

  constructor(public loginFlowService: LoginFlowService) {
    this.loginFlowService.loadFormGroup();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
		this.loginFlowService.onSubmit();
	}
  
}
