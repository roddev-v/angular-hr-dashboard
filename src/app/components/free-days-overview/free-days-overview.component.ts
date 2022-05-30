import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FreeDaysService } from 'src/app/services/free-days.service';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-free-days-overview',
  templateUrl: './free-days-overview.component.html',
  styleUrls: ['./free-days-overview.component.css']
})
export class FreeDaysOverviewComponent implements OnInit, OnDestroy {
  user?: UserModel;
  usedDays = 0;
  interval?: number;

  constructor(private readonly identity: IdentityService,
    private readonly freeDaysService: FreeDaysService) { }

  ngOnDestroy(): void {
    window.clearInterval(this.interval);
  }

  async ngOnInit(): Promise<void> {
    await this.updateFreeDays();
    return; // TODO remove later
    this.interval = window.setInterval(() => this.updateFreeDays(), 5000);
  }

  async updateFreeDays() {
    this.usedDays = 0;
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
