import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAayjRUiQQgk0GkKygu2hDbJoR_1qp3tWc",
  authDomain: "angular-capstone-ba6cc.firebaseapp.com",
  projectId: "angular-capstone-ba6cc",
  storageBucket: "angular-capstone-ba6cc.firebasestorage.app",
  messagingSenderId: "210932830976",
  appId: "1:210932830976:web:64c03b93eacd534198d9e5"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
    provideAuth(()=>  getAuth()),
    provideHttpClient()
  ]
};
