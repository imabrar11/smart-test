import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './resources/views/change-password/change-password.component';
import { HowItWorksComponent } from './resources/views/how-it-works/how-it-works.component';

const routes: Routes = [
  { path: 'changepassword', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
