import { IPresenter } from './';

export class ConflictPresenter implements IPresenter {
    statusCode: number = 409;
    response: any;

    constructor(response: any) {
        this.response = response;
    }
}
