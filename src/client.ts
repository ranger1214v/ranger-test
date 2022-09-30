import { createChannel, createClient } from 'nice-grpc';
import {
    ToDoServiceClient,
    ToDoServiceDefinition,
} from './protos/action';
import { environment } from './environments/environment';
import { healthCheck } from './implementations/client/health-check';
// import { unaryAddItem } from './implementations/client/unary-add-item';
// import { clientStreamingAddItem } from './implementations/client/client-streaming-add-item';
// import { serverStreamingSubList } from './implementations/client/server-streaming-sub-list';
// import { bidirectionalStreamingAsyncList } from './implementations/client/bidirectional-streaming';

const channel = createChannel(`${environment.serverHost}:${environment.serverPort}`);

const client: ToDoServiceClient = createClient(
    ToDoServiceDefinition,
    channel,
);

// clientStreamingAddItem(client);
// serverStreamingSubList(client);
// bidirectionalStreamingAsyncList(client);
// unaryAddItem(client, 'foo', 'bar');
healthCheck(client);
