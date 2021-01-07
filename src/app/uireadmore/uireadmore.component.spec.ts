import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UireadmoreComponent } from './uireadmore.component';

describe('UireadmoreComponent', () => {
  let component: UireadmoreComponent;
  let fixture: ComponentFixture<UireadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UireadmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UireadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
