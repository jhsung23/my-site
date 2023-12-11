import { AssertionError } from 'assert';

import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertPageObjectResponseArray(val: any): asserts val is PageObjectResponse[] {
  if (val === null || val[0].properties === undefined) {
    throw new AssertionError({
      message: `Expected 'val' to be PageObjectResponse[], but received ${val}`,
    });
  }
}
