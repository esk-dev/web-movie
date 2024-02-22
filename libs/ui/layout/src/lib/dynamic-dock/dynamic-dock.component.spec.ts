import { DynamicDockComponent } from './dynamic-dock.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

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
