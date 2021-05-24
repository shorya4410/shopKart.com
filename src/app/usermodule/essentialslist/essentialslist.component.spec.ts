import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialslistComponent } from './essentialslist.component';

describe('EssentialslistComponent', () => {
  let component: EssentialslistComponent;
  let fixture: ComponentFixture<EssentialslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
