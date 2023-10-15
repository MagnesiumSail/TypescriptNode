import { Options } from './types';
import dotenv from 'dotenv';
dotenv.config();
export const Token = process.env.TOKEN || '';

export const createHeaders = (): Options['headers'] => ({
    'ContentType': 'application/json',
    'Authorization': `Bearer ${Token}`,
});

export const createMethods = (method?: string): Options => ({
    method,
    headers: createHeaders()
})