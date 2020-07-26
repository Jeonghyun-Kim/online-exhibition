// import Router from 'next/router';

// interface TranslateRouter extends Router {
//   pushI18n: Function,
//   replaceI18n: Function,
// }

declare module 'remark-html' {
  const html: any;
  export default html;
}

declare module 'next-translate/useTranslation' {
  const useTranslation: any;
  export default useTranslation;
}

declare module 'next-translate/Router' {
  const i18nRouter: any;
  export default i18nRouter;
}
