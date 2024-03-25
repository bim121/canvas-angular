import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authorizedGuard } from './guards/authorized.guard';

const routes: Routes = [
  {
    path:'dashboard',
    canActivate: [authorizedGuard],
    component: DashboardComponent,
  },
  {
    path:'',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }