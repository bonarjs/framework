module.exports = {
    extends: ["next"],
    settings: {
      next: {
        rootDir: ["/src/apps/*/"],
      },
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  };