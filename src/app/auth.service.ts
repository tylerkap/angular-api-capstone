import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { user } from '@angular/fire/auth';
import { UserInterface } from './user.interface';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);

  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);

  constructor() { }

  register(email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, 
      email, 
      password
    ).then(response => updateProfile(response.user, {displayName: email}))

    return from(promise)
  }


  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});

    return from(promise);
  }
}
