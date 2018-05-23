// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAGcYsQtc9xqqEKstnoO3WasuZxJmKTwNc',
    authDomain: 'angular-material-app-shriek.firebaseapp.com',
    databaseURL: 'https://angular-material-app-shriek.firebaseio.com',
    projectId: 'angular-material-app-shriek',
    storageBucket: 'angular-material-app-shriek.appspot.com',
    messagingSenderId: '974351057659'
  },
  navigationApi: '/assets/data/navigation',
  todoApi: '/assets/data/todo/list.json',
  mailApi: '/assets/data/mail/list.json',
  chatsApi: '/assets/data/chats/list.json',
  analysisApi: '/assets/data/analysis',
  crmApi: '/assets/data/crm',
  tableApi: '/assets/data/table'
};
