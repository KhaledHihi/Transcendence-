import { QueryFailedError } from 'typeorm';

export function isDuplicateError(error: unknown): boolean {
  return (
    error instanceof QueryFailedError &&
    (error as any).driverError?.code === 'ER_DUP_ENTRY'
  );
}