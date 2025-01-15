export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            "do-space-try.s3.fra1.amazonaws.com",
            "https://do-space-try.s3.fra1.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "strapi.io",
            "do-space-try.s3.fra1.amazonaws.com",
            "https://do-space-try.s3.fra1.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
