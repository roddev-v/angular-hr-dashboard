import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private readonly firestore: AngularFirestore) {}

  public async getProjects(): Promise<any[]> {
    const documents = await lastValueFrom(
      this.firestore.collection('projects').get()
    );
    const projects: any[] = [];
    documents.forEach((doc) => projects.push(doc.data()));
    return projects;
  }
}
