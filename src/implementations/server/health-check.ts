import { DeepPartial, HealthCheckRes } from '../../protos/action';

export const healthCheck = async (): Promise<DeepPartial<HealthCheckRes>> => {
    console.log({ statusCode: 200, statusMsg: "ok" });
    return { statusCode: 200, statusMsg: "ok" };
}