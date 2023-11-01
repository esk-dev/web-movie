import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDockComponent } from './dynamic-dock.component';

describe('DynamicDockComponent', () => {
  let component: DynamicDockComponent;
  let fixture: ComponentFixture<DynamicDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
