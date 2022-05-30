import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { VacationRequestModel } from 'src/app/models/vacation-request.model';
import { FreeDaysService } from 'src/app/services/free-days.service';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-free-days-request-form',
  templateUrl: './free-days-request-form.component.html',
  styleUrls: ['./free-days-request-form.component.css'],
})
export class FreeDaysRequestFormComponent implements OnInit {
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  selectedAdmin = new FormControl('');

  adminUsers: UserModel[] = [];

  constructor(
    private readonly identity: IdentityService,
    private readonly freeDaysService: FreeDaysService
  ) {
    this.campaignOne = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  async ngOnInit(): Promise<void> {
    this.adminUsers = await this.identity.getAdminUsers();
  }

  public async submitRequest(): Promise<void> {
    const request = new VacationRequestModel();
    const user = this.identity.getUser();
    request.email = user.email;
    request.assignedTo = this.selectedAdmin.value;
    request.periodStart = (this.campaignOne.value.start as Date).toISOString();
    request.periodEnd = (this.campaignOne.value.end as Date).toISOString();
    await this.freeDaysService.submitRequest(request);
  }
}
