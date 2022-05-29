import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TimesheetsRequestModel } from 'src/app/models/timesheets-request.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { TimesheetsService } from 'src/app/services/timesheets.service';

@Component({
  selector: 'app-timesheets-form',
  templateUrl: './timesheets-form.component.html',
  styleUrls: ['./timesheets-form.component.css'],
})
export class TimesheetsFormComponent implements OnInit {
  projects: any[] = [];

  projectsControl = new FormControl('');
  descriptionControl = new FormControl('');
  timeControl = new FormControl(8);
  dateControl = new FormControl(new Date());

  hours = [1, 2, 3, 4, 6, 8];

  constructor(
    private readonly projectsService: ProjectsService,
    private readonly timesheetsService: TimesheetsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.projects = await this.projectsService.getProjects();
  }

  async submit(): Promise<void> {
    const payload = new TimesheetsRequestModel();
    payload.projectName= this.projectsControl.value.projectName;
    payload.companyName= this.projectsControl.value.companyName;
    payload.time = this.timeControl.value;
    payload.description = this.descriptionControl.value;
    payload.date = (this.dateControl.value as Date).toISOString();
    this.timesheetsService.submit(payload);
  }
}
