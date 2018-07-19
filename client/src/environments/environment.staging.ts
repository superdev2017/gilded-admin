// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  envName: 'staging',
  production: false,
  staging: true,
  server: 'gilded-dev.firebaseapp.com',
  api_url: 'https://us-central1-gilded-dev.cloudfunctions.net',
  socket_url: 'http://localhost:8989',
  website: 'https://gilded-dev.firebaseapp.com',
  app_name: 'gilded-dev',
  firebase: {
    apiKey: 'AIzaSyDjekhEH9GR3vi4zb1NXp5RXAZNW1Sh41s',
    authDomain: 'gilded-dev.firebaseapp.com',
    databaseURL: 'https://gilded-dev.firebaseio.com',
    projectId: 'gilded-dev',
    storageBucket: 'gilded-dev.appspot.com',
    messagingSenderId: '195832145055'
  }
};
