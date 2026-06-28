import serverlessExpress from '@codegenie/serverless-express';
import { startHttp } from './index.js';

let handler;

export const lambdaHandler = async (event, context) => {
  if (!handler) {
    const app = await startHttp({ noListen: true });
    handler = serverlessExpress({ app });
  }
  return handler(event, context);
};
