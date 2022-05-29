import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { plainToClass } from 'class-transformer';
import { lastValueFrom } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class IdentityService {
  constructor(
    private readonly auth: AngularFireAuth,
    private readonly firestore: AngularFirestore
  ) {}

  public async login(email: string, password: string): Promise<any> {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  public async getUserProfile(email: string): Promise<any> {
    const document = await lastValueFrom(
      this.firestore.collection('users').doc(email).get()
    );
    return plainToClass(UserModel, document.data());
  }

  public async getAdminUsers(): Promise<UserModel[]> {
    const snapshot = await this.firestore
      .collection('users')
      .ref.where('isAdmin', '==', true)
      .get();
    return snapshot.docs.map((doc) => plainToClass(UserModel, doc.data()));
  }

  public saveUser(user: UserModel): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): UserModel {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return plainToClass(UserModel, user);
  }
}
