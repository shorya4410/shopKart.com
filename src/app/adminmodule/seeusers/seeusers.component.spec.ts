import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeusersComponent } from './seeusers.component';

describe('SeeusersComponent', () => {
  let component: SeeusersComponent;
  let fixture: ComponentFixture<SeeusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
