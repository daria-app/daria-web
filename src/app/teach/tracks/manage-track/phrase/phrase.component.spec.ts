import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePhraseComponent } from './manage-phrase.component';

describe('AboutComponent', () => {
  let component: ManagePhraseComponent;
  let fixture: ComponentFixture<ManagePhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePhraseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
