import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'docente', loadChildren: () => import('./components/docente/docente.module').then(m => m.DocenteModule) }, { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }, { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) }, { path: 'start', loadChildren: () => import('./components/start/start.module').then(m => m.StartModule) },{path:'', redirectTo:'/start',pathMatch:'full'},{path:'**', redirectTo:'/start',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
