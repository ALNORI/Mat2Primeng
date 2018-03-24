import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskinDetailsComponent } from './maskin-details.component';

describe('MaskinDetailsComponent', () => {
  let component: MaskinDetailsComponent;
  let fixture: ComponentFixture<MaskinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
