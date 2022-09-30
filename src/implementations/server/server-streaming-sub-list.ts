import { messageItem$ } from '../../cache/list';
import { DeepPartial, Item } from '../../protos/action';
import { Empty } from '../../protos/google/protobuf/empty';
import { from } from 'ix/asynciterable';
import { withAbort } from 'ix/asynciterable/operators';
import { CallContext } from 'nice-grpc-common';

export async function* serverStreamingSubList(
    request: Empty,
    context: CallContext,
): AsyncIterable<DeepPartial<Item>> {
    yield* from(messageItem$).pipe(withAbort(context.signal));
}

