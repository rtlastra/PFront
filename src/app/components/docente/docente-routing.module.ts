import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteComponent } from './docente.component';

const routes: Routes = [{ path: '', component: DocenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
