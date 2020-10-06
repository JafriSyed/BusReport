import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Transport NSW'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Transport NSW');
  });


  it('H1 text should be Bus Reports', async(() => {
    // fetch debug element
    const fixture = TestBed.createComponent(AppComponent);
    let h1El = fixture.debugElement.query(By.css('h1'));
    expect(h1El.nativeElement.textContent).toEqual("Bus Reports");
 }));
});
