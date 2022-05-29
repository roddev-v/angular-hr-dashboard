import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-free-days-overview',
  templateUrl: './free-days-overview.component.html',
  styleUrls: ['./free-days-overview.component.css']
})
export class FreeDaysOverviewComponent implements OnInit {
  user?: UserModel;

  constructor(private readonly identity: IdentityService) { }

  ngOnInit(): void {
    this.user = this.identity.getUser();
  }

}
