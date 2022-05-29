// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseOptions } from '@angular/fire/app';

export const environment = {
  production: false,
  config: {
    apiKey: 'AIzaSyAXPZHwbsm-b9oGIOtVcCcFM2ZBCoKPTCY',
    authDomain: 'angular-hr-dashboard.firebaseapp.com',
    projectId: 'angular-hr-dashboard',
    storageBucket: 'angular-hr-dashboard.appspot.com',
    messagingSenderId: '1061746742298',
    appId: '1:1061746742298:web:798f4997ae8cd26a9aeda3',
  } as FirebaseOptions,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
