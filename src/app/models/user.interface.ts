export interface IRequestCreateUser {
	name: string;
	lastName: string;
    userName: string;
    password: string;
    email: string;
    expire: boolean;
    dateExpire: Date;
    superUser: boolean;   
}

export interface IResponseCreateUser {
	name: string;
	lastName: string;
    userName: string;
    password: string;
    email: string;
    expire: boolean;
    dateExpire: Date;
    superUser: boolean;   
}