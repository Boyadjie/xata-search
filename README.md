# Requirements :

The requirement of this project was :
- Automatic deploy
- Add unit test with an example
- Add non regression
- Add End to End testing
- Monitor the app

# What i've done :

### Automatic Deploy
I used Vercel to automatically create the repo and deploy this app (button just under this section)
Like that the pre config of the project is set and it's already in production.

### Add Unit Tests
Since it's a Next.js project, i used `jest` and `react testing library` to test a component of the app
I just wanted to show a simple test so i didn't choose a too complex components that may require mock or more complex testing.

You can see this test under the folder `__test__` on the root of the project.

### Non Regression
Now that the unit tests are set up i can add non regression to the project by adding the execution of tests before the `build` on the commands in the `package.json` file.
Like that if the tests failed, the app is not build and send to the vercel production.

/!\ There was an issue with the NR and the End To End tests that were in conflict. The thing is that if you want end to end test using playwright or other tools, it's hard to do with vercel. You will need to create your own prod and pre-prod servers because vercel have also it's limitations and own usages.

### End To End tests
I choose playwright for the End To End tests, it's a really effective and easy to set up tool.
Following the doc, i initialized it and test a simple user story (show a film detail).

### Monitoring
To monitor the app i created and linked a Sentry project. The setup is easy enough but to have a really effective configuration it take some times and a bit of practice. 

---------




<a href="https://xmdb.vercel.app" target="_blank">
  <img src="/public/xmdb-hero@2x.png" alt="Xata and XMDB logo" />
</a>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fxataio%2Fxmdb&integration-ids=oac_IDpMECDuYqBvAtu3wXXMQe0J&install-command=pnpm%20one-click)

## Features ⚡️

- [Typo-Tolerant Full-Text Search](https://xata.io/docs/api-guide/search).
- [Aggregations](https://xata.io/docs/api-guide/aggregate).
- [Type-Safe SDK/ORM](https://github.com/xataio/client-ts/blob/main/packages/client/README.md) (schema-based types generation).
- Next.js App Directory with React Server Components.
- Intercepting Route
- Parallel Route

## Stack ⚙️

| Package     | Reason                        |
| ----------- | ----------------------------- |
| Zod         | Schema validation             |
| Xata Client | ORM                           |
| TailwindCSS | Styles                        |
| vercel/OG   | OG image generation           |
| React-Icons | SVG Icons as React components |

## Environment Setup 🧱

To have your own local instance of this app, you will need 2 API keys, and your deployment URL.

- [`XATA_API_TOKEN`](https://xata.io/docs/concepts/api-keys): to connect your own Xata workspace.
- `VERCEL_URL`: popullated by Vercel, on your local environment it’s your local server url (`https://localhost:3000` by default).

Once you have those keys, you can create a `.env.local` as shown in `.env.template`.

## Link to Xata 🦋

You can run the `xata init` command with some default configuration:

```sh
pnpm xata:link
```

By the end you should have the `XATA_API_TOKEN` in your `.env.local` and a `.xatarc` file created.

## Database Seed 🌱

Once you have a working link with the workspace, you can run:

```sh
pnpm xata:seed
```

This task will add **100 rows of mocked data** to get you started with a working app.

## Run Locally 🧑‍✈️

Once you project is linked and database has data, you can start the development server.

```sh
pnpm dev
```

By default, server will run on [localhost:3000](http://localhost:3000).

---

<a href="https://xata.io/" target="_blank">
  <img alt="Xata's logo" src="/public/xata-logo-primary@2x.png" width="32" />
</a>
