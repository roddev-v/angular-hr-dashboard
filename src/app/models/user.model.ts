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

  @Transform((data: any) => {
    return new Date(
      typeof data.value === 'string' ? data.value : data.value.seconds * 1000
    );
  })
  startDate?: Date;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
