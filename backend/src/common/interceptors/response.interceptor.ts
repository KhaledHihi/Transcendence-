import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  RESPONSE_MESSAGE_KEY,
} from '../decorators/response-message.decorator';

@Injectable()
export class ResponseInterceptor
  implements NestInterceptor
{
  constructor(
    private readonly reflector: Reflector,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    const message =
      this.reflector.get<string>(
        RESPONSE_MESSAGE_KEY,
        context.getHandler(),
      ) ?? 'Request completed successfully';

    return next.handle().pipe(
      map((data) => ({
        success: true,
        message,
        data,
      })),
    );
  }
}