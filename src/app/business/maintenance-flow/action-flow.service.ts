import { Injectable } from '@angular/core';
import { IResponseGetAllAction } from 'src/app/models/action.interface';
import { ActionApiService } from 'src/app/services/apis/action-api.service';

@Injectable({ providedIn: 'root' })
export class ActionFlowService {

    listActions: IResponseGetAllAction[] = [];

    constructor(private _actionApiService: ActionApiService) { }

    

    // getAll(): void {
    //     this._actionApiService.getAll({ page: 0, size: 10, columnOrder: '', order: 1 }).subscribe((data :) => {
    //         this.listActions = data?.data?.list;
    //     });
    // }

}