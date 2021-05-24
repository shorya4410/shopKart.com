import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicslistComponent } from './electronicslist.component';

describe('ElectronicslistComponent', () => {
  let component: ElectronicslistComponent;
  let fixture: ComponentFixture<ElectronicslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
