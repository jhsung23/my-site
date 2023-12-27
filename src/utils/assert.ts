/* eslint-disable @typescript-eslint/no-explicit-any */
import { AssertionError } from 'assert';

import {
  DatabaseObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export function assertPageObjectResponseArray(val: any): asserts val is PageObjectResponse[] {
  if (val === null || (val.length > 0 && val[0].properties === undefined)) {
    throw new AssertionError({
      message: `Expected 'val' to be PageObjectResponse[], but received ${val}`,
    });
  }
}

export function assertDatabaseObjectResponse(val: any): asserts val is DatabaseObjectResponse {
  if (
    val.object === 'database' &&
    'title' in val &&
    'description' in val &&
    'icon' in val &&
    'cover' in val
  ) {
    return;
  }
  throw new AssertionError({
    message: `Expected 'val' to be DatabaseObjectResponse, but received ${val}`,
  });
}
