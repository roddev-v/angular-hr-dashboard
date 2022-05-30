import { Transform } from 'class-transformer';

export class UserModel {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  freeDays?: number;
  isAdmin?: boolean;
  usedFreeDays?: number;
  workingHours?: number;
  email?: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
