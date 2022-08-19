export interface IRequestGetAllAction {
	page?: number;
	size?: number;
    columnOrder: string;
    order : number;
}

export interface IResponseGetAllAction {
	id: number;
	name: string;
    state: number; 
}