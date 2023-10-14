module.exports = {
  "{src, tools, libs}/**/*.{ts, js, json, md, html, scss}": [
    "nx affected --target lint --uncommitted --fix true",
    // 'nx affected --target test --uncommitted',
    "nx format:write --uncommitted",
  ],
};
