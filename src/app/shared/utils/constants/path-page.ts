//#region  PATH AUTH
const loginPage = 'login';
const registerPage = 'register';

export const PATHS_AUTH_PAGES = {
	loginPage: {
		withSlash: `/${loginPage}`,
		onlyPath: loginPage
	},
	registerPage: {
		onlyPath: registerPage
	}
};
//#endregion