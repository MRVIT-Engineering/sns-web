import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (!request.headers.get('x-forwarded-proto')?.includes('https') && process.env.NODE_ENV === 'production') {
    const httpsUrl = `https://${request.headers.get('host')}${request.nextUrl.pathname}${request.nextUrl.search}`;

    return NextResponse.redirect(httpsUrl, 301);
  }

  return NextResponse.next();
}

// Only run the middleware on the frontend routes
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
