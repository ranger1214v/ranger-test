import { CallContext } from "nice-grpc-common";
import { messageItem$ } from '../../cache/list';
import { Item, DeepPartial } from '../../protos/action';
import { Empty } from '../../protos/google/protobuf/empty';

export const unaryAddItem = async (
    request: Item,
    context: CallContext,
): Promise<DeepPartial<Empty>> => {
    messageItem$.next(request);
    return Empty;
}