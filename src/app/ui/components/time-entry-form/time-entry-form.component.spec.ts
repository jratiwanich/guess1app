import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryFormComponent } from './time-entry-form.component';

describe('TimeEntryFormComponent', () => {
  let component: TimeEntryFormComponent;
  let fixture: ComponentFixture<TimeEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
