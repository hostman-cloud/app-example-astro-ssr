# Astro SSR

Example of a [Astro](https://astro.build/) application with server-side rendering (SSR) that can be deployed to **Hostman** without configuration.

:tada: [Demo]()

:rocket: [Create your Apps](https://hostman.com/my/apps/create)

:books: [Hostman Apps Documentation](https://hostman.com/docs/app-platform/backend-apps/)

## Deployment settings

Enable SSR support when creating the app: it will be deployed as a Node.js backend.

| Parameter     | Value                          |
| ------------- | ------------------------------ |
| Framework     | Astro, SSR enabled             |
| Build command | `npm run build`                |
| Start command | `node ./dist/server/entry.mjs` |

The server is built by the [`@astrojs/node`](https://docs.astro.build/en/guides/integrations-guide/node/) adapter in `standalone` mode and listens on `0.0.0.0` (`server.host: true` in `astro.config.mjs`). The default port is `4321`, it can be changed with the `PORT` environment variable.

Static version: [app-example-astro](https://github.com/hostman-cloud/app-example-astro).

## What the example shows

- `/`: the page is rendered on the server on every request; the render time, Node.js version and `User-Agent` are rendered in frontmatter and are already in the HTML.
- `/about`: the second page of the app.
- `/api/hello`: an API endpoint that returns JSON.

## <a name="dev"></a>Running locally

```bash
# install dependencies
npm install

# run in development mode with file watching
npm run dev

# build for production
npm run build

# start the built application
npm run start
```

Requires Node.js 22.12 or newer.
