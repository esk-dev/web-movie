import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";

describe("LoginComponentComponent", () => {
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

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
