import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTrackComponent } from './manage-track.component';

describe('AboutComponent', () => {
  let component: ManageTrackComponent;
  let fixture: ComponentFixture<ManageTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTrackComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
