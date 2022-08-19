//#region  PATH AUTH
const loginPage = 'login';
const resetPage = 'reset';

export const PATHS_AUTH_PAGES = {
	loginPage: {
		withSlash: `/${loginPage}`,
		onlyPath: loginPage
	},
	registerPage: {
		withSlash: '',
		onlyPath: resetPage
	}
};
//#endregion

//#region PATH DASHBOARD
const dashboardPage = 'dashboard';

export const PATHS_DASHBOARD_PAGES = {
	withSlash: `/${dashboardPage}`,
	onlyPath: dashboardPage,
};

//#endregion