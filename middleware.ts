import { next } from '@vercel/edge';

export default function middleware(request: Request) {
  if (process.env.VERCEL_ENV === 'production') {
    return Response.redirect(new URL('/', request.url), 307);
  }
  return next();
}

export const config = {
  matcher: [
    '/wip',
    '/wip/',
    '/wip.html',
    '/Portfolio/wip',
    '/Portfolio/wip/',
    '/Portfolio/wip.html',
  ],
};
