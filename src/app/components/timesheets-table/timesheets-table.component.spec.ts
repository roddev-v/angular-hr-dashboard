import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetsTableComponent } from './timesheets-table.component';

describe('TimesheetsTableComponent', () => {
  let component: TimesheetsTableComponent;
  let fixture: ComponentFixture<TimesheetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
