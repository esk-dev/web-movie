import { LoginComponent } from './login.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('LoginComponentComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // eslint-disable-next-line @rx-angular/no-explicit-change-detection-apis
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
