import { ToDoServiceClient } from "../../protos/action";

export const healthCheck = async (client: ToDoServiceClient<{}>): Promise<any> => {
    return client.healthCheck({});
}