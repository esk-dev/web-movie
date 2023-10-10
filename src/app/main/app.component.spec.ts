import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    // eslint-disable-next-line @rx-angular/no-explicit-change-detection-apis
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "Welcome web-movies"
    );
  });

  it(`should have as title 'web-movies'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("web-movies");
  });
});
