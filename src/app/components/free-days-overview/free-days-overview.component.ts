import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FreeDaysService } from 'src/app/services/free-days.service';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-free-days-overview',
  templateUrl: './free-days-overview.component.html',
  styleUrls: ['./free-days-overview.component.css']
})
export class FreeDaysOverviewComponent implements OnInit {
  user?: UserModel;
  usedDays = 0;

  constructor(private readonly identity: IdentityService,
    private readonly freeDaysService: FreeDaysService) { }

  async ngOnInit(): Promise<void> {
    this.user = this.identity.getUser();
    const freeDays = await this.freeDaysService.getAcceptedFreeDays() as any[];
    freeDays.forEach((day) => {
      const start = new Date(day.periodStart)
      const end = new Date(day.periodEnd)

      const difference = end.getTime() - start.getTime();
      const days = Math.ceil(difference / (1000 * 3600 * 24));
      this.usedDays += days;
    })
  }

}
