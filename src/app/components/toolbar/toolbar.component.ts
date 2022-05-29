import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  user?: UserModel;

  constructor(private readonly identityService: IdentityService) {}

  ngOnInit(): void {
    this.user = this.identityService.getUser();
    console.log(this.user);
  }
  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}
