import { DeepPartial, Item, ToDoServiceClient } from "../../protos/action";

export const clientStreamingAddItem = async (client: ToDoServiceClient<{}>) => {

    async function* createRequest(): AsyncIterable<DeepPartial<Item>> {
        for (let i = 0; i < 10; i++) {
            const item: Item = { name: 'test name', message: 'test message' };
            yield item;
        }
    }
    return client.clientStreamingAddItem(createRequest());
}
