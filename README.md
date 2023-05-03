# Module Federation - React Router DOM nested routers

# Auth app

```js
name: "auth",
filename: "remoteEntry.js",
remotes: {},
exposes: {
  "./AuthIndex": "./src/bootstrap",
},
shared: {
  ...deps,
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: deps["react-dom"],
  },
},
```

<br>

# Running the demo

1. Install deps: `npm install`.
2. Start apps: `npm run start`.

Visit http://localhost:8082 to navigate `auth` app.

<br>

# Credit

Create using https://github.com/jherr/create-mf-app.
