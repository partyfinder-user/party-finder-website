import { NextResponse } from 'next/server';

export const config = {
  matcher: '/((?!api|partyfinderapi|images|admin|account|_next|static|public|_next/static|_next/image|favicon.ico).*)',
};

export async function middleware(req) {
  const ipWhiteList = process.env.NEXT_PUBLIC_IP_WHITE_LIST;
  const ipList = ipWhiteList.split(',');

  const detectedIp = req.ip;
  if (process.env.ENV === 'staging' && !ipList?.includes(detectedIp)) {
    if (!isAuthenticated(req)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic' },
      });
    }
  }

  return NextResponse.next();
}

const isAuthenticated = (req) => {
  const authheader = req.headers.get('authorization') || req.headers.get('Authorization');
  if (!authheader) {
    return false;
  }

  const auth = Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  if (user == 'pf.dev.team' && pass == 'P@$$W0rD') {
    return true;
  } else {
    return false;
  }
};
