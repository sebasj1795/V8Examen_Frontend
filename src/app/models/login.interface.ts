export interface IRequesLogin {
	username: string;
	password: string;
}

export interface IResponseLogin {
	success: boolean;
	errorMessage: string;
	token: string;
}