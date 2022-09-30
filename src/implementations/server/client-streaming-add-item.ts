import { CallContext } from 'nice-grpc-common';
import { DeepPartial, Item } from '../../protos/action';
import { Empty } from '../../protos/google/protobuf/empty';
import { messageItem$ } from '../../cache/list';

export const clientStreamingAddItem = async (
    request: AsyncIterable<Item>,
    context: CallContext,
): Promise<DeepPartial<Empty>> => {
    for await (const item of request) {
        messageItem$.next(item);
    }
    return Empty;
}