import dotenv from 'dotenv';
import getManifest from '../utils/getManifest';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const files = getManifest();
console.log(isProd);

const render = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Movies</title>
        <link rel="stylesheet" href="${isProd ? files['main.css'] : 'assets/app.css'}" type="text/css"></link>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)
    .replace(
      /</g,
      '\\u003c'
    )}
        </script>
        <script type="text/javascript" src="${isProd ? files['main.js'] : 'assets/app.js'}"></script>
        <script type="text/javascript" src="${isProd ? files['vendors.js'] : 'assets/vendor.js'}"></script>
      </body>
    </html>
`;
};

export default render;
