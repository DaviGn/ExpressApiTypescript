import { ConflictPresenter } from './conflict';
import { CreatedPresenter } from './created';
import { NotFoundPresenter } from './notFound';
import { SuccessPresenter } from './success';
import { DeletedPresenter } from './deleted';
import { ErrorPresenter } from './error';
import { processResult } from './result';
import { UnathorizedPresenter } from './unathorized';

interface IPresenter {
    statusCode: number;
    response: any;
}

export {
    ConflictPresenter,
    CreatedPresenter,
    NotFoundPresenter,
    DeletedPresenter,
    SuccessPresenter,
    ErrorPresenter,
    UnathorizedPresenter,
    IPresenter,
    processResult
};
