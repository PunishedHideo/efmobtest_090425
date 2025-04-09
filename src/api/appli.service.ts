import {
  storeApplicationDb,
  workApplicationDb,
  completeApplicationDb,
  rejectApplicationDb,
  getApplicationDb,
  rejectInWorkApplicationDb,
} from '../db/mongodb.js';

import { Application } from './appli.dto.js';

export const createApplicationService = async (topic: string, text: string) => {
  await storeApplicationDb(new Application(topic, text));
};

export const workApplicationService = async (applicationId: string) => {
  await workApplicationDb(applicationId);
};

export const completeApplicationService = async (
  applicationId: string,
  replyText: string
) => {
  return await completeApplicationDb(applicationId, replyText);
};

export const rejectApplicationService = async (
  applicationId: string,
  replyText: string
) => {
  return await rejectApplicationDb(applicationId, replyText);
};

export const getApplicationService = async (data: any) => {
  // any for test
  return await getApplicationDb(data);
};

export const rejectInWorkApplicationService = async (
  rejectionReason: string
) => {
  return await rejectInWorkApplicationDb(rejectionReason);
};
