import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './resources/views/login/login.component';
import { RegisterComponent } from './resources/views/register/register.component';
import { ScanComponent } from './resources/views/scan/scan.component';
import { PickUpComponent } from './resources/views/pick-up/pick-up.component';
import { SplashComponent } from './resources/views/splash/splash.component';
import { ReportComponent } from './resources/views/report/report.component';
import { ReportDetailComponent } from './resources/views/report-detail/report-detail.component';
import { NavigationComponent } from './resources/views/navigation/navigation.component';
import { ChangePasswordComponent } from './resources/views/change-password/change-password.component';
import { HowItWorksComponent } from './resources/views/how-it-works/how-it-works.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoute: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'scan', component: ScanComponent},
  {path: 'pick-up', component: PickUpComponent},
  {path: 'report', component:ReportComponent},
  {path: 'repott-detail', component:ReportDetailComponent},
  {path: 'how-it-works', component:HowItWorksComponent},
  {path: 'change-password', component:ChangePasswordComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ScanComponent,
    PickUpComponent,
    SplashComponent,
    ReportComponent,
    ReportDetailComponent,
    NavigationComponent,
    ChangePasswordComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
