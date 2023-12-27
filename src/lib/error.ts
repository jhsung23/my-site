import { APIResponseError } from '@notionhq/client';

export abstract class CustomError extends Error {
  constructor(
    public name: string,
    public message: string,
    public cause?: unknown,
  ) {
    super(message, { cause });
  }
}

export class HttpError extends CustomError {
  statusCode: number;

  constructor(statusCode: number, cause?: unknown) {
    super('HttpError', HttpError.getErrorMessage(statusCode), cause);
    this.statusCode = statusCode;
  }

  static getErrorMessage(statusCode: number): string {
    switch (statusCode) {
      case 400: {
        return '데이터 로드에 실패했어요.';
      }
      case 401 || 403: {
        return '접근 권한이 없어요.';
      }
      case 404: {
        return '요청하신 페이지를 찾을 수 없어요.';
      }
      case 429: {
        return '요청 가능한 횟수를 초과했어요. 잠시 후에 다시 시도해 주세요.';
      }
      case 500: {
        return '서버 에러가 발생했어요.';
      }
      case 502 || 503: {
        return '요청 대기 시간을 초과했어요. 잠시 후에 다시 시도해 주세요.';
      }
      default: {
        return '현재 서비스가 원활하지 않아요. 잠시 후에 다시 시도해 주세요.';
      }
    }
  }
}

export class UnknownError extends CustomError {
  constructor(cause?: unknown) {
    super('UnknownError', '사이트 내부 에러가 발생했어요. 잠시 후에 다시 시도해 주세요.', cause);
  }
}

export const handleHttpRequestError = (error: unknown) => {
  if (error instanceof APIResponseError) {
    throw new HttpError(error.status, error.cause);
  }
  throw new UnknownError(error);
};
