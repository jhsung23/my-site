import { AssertionError } from 'assert';

export function assertPageObjectResponse<T>(val: any): asserts val is T {
  if (val === null || typeof val.properties === undefined) {
    throw new AssertionError({
      message: `Expected 'val' to be PageObjectResponse[], but received ${val}`,
    });
  }
}
