import { ToDoServiceClient } from '../../protos/action';

export const unaryAddItem = async (client: ToDoServiceClient<{}>, name: string, message: string) => {
    return client.unaryAddItem({ name, message });
}