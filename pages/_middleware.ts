import {NextResponse} from 'next/server';
// import type {NextRequest} from 'next/server';

export function middleware(): NextResponse {
  const res = NextResponse.next();
  res.headers.set('x-middleware-modified-at', new Date().getTime().toString());
  return res;
}
