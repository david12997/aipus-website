import { i18nRouter } from 'next-i18n-router';

const i18Config ={
  locales: ['es', 'en','fr'],
  defaultLocale: 'es',
  localeDetector: (request:any, config:any) => {
    // your custom locale detection logic
    return 'es';
  }
}

export function middleware(request:any) {
  return i18nRouter(request, i18Config);
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};