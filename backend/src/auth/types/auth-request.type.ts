import { Request } from 'express';
import type { JwtPayload } from './jwt-payload.type';

export interface AuthRequest extends Request {
  user?: JwtPayload;
}