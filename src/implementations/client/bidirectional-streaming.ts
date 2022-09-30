import { DeepPartial, Item, ToDoServiceClient } from '../../protos/action';

export const bidirectionalStreamingAsyncList = async (client: ToDoServiceClient<{}>) => {

    async function* createRequest(): AsyncIterable<DeepPartial<Item>> {
        for (let i = 0; i < 10; i++) {
            const item: Item = { name: 'test name', message: 'test message' };
            yield item;
        }
    }

    for await (const request of client.bidirectionalStreamingAsyncList(createRequest())) {
        console.log('Client: BidirectionalStreamingAsyncList', request);
    }
    
}