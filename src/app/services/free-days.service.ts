import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { VacationRequestModel } from '../models/vacation-request.model';
import { IdentityService } from './identity.service';

@Injectable({ providedIn: 'root' })
export class FreeDaysService {
  constructor(
    private readonly firestore: AngularFirestore,
    private readonly identity: IdentityService
  ) {}

  public async submitRequest(payload: VacationRequestModel): Promise<void> {
    await this.firestore
      .collection('freeDays')
      .add(JSON.parse(JSON.stringify(payload)));
  }
}
