import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { PATHS_AUTH_PAGES } from './shared/utils/constants/path-page';

const routes: Routes = [
	{
		path: PATHS_AUTH_PAGES.loginPage.onlyPath,
		component: LoginComponent
	},
	{
		path: '',
		loadChildren: () => import('./shared/components/layouts/admin/admin.module').then((m) => m.AdminModule)
	},
	{ path: '**', pathMatch: 'full', redirectTo: PATHS_AUTH_PAGES.loginPage.onlyPath },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
