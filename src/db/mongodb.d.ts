import { ApplicationInterface, GetData } from '../api/appli.dto';

export declare function storeApplicationDb(
  application: ApplicationInterface
): Promise<any>;

export declare function workApplicationDb(
  id: string // for test
): Promise<any>;

export declare function completeApplicationDb(
  id: string,
  replyText: string
): Promise<any>;

export declare function rejectApplicationDb(
  id: string,
  replyText: string
): Promise<any>;

export declare function getApplicationDb(data: GetData): Promise<any>;

export declare function rejectInWorkApplicationDb(
  rejectionReason: string
): Promise<any>;
