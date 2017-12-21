import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../services/login/login.service'
import { CookieService, CookieOptionsProvider, CookieModule } from 'ngx-cookie'
import { RoomService } from '../services/room/room.service'
import { HttpClientModule } from '@angular/common/http'
import { SocketService } from '../services/socket/socket.service'
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        CookieModule.forRoot(),
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [RoomService, LoginService, SocketService],
    }).compileComponents();
  }));
  it('should create the app', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Messaging app'`, (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Messaging app');
  }));
  it('should render title in a h1 tag', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Messaging app');
  }));

  it('username should be undefined', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.username).toBeUndefined
  }))

  it('should not have cookies', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.deleteCookies()
    expect(app.cookieService.get('isLoggedIn')).toBeUndefined
  }))
});
