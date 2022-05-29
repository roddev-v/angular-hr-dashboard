import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TimesheetsRequestModel } from '../models/timesheets-request.model';

@Injectable({ providedIn: 'root' })
export class TimesheetsService {
  constructor(private readonly firestore: AngularFirestore) {
  }

  async submit(params: TimesheetsRequestModel) {
      this.firestore.collection('timesheets').add(JSON.parse(JSON.stringify(params)));
  }
}
