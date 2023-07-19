import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { AltaProdComponent } from './alta-prod/alta-prod.component';
import { TablaInvComponent } from './tabla-inv/tabla-inv.component';

const routes: Routes = [{
  path: '',
  component: LoginRegComponent
},
{
  path: 'inventario',
  component: TablaInvComponent
},
{
  path: 'agrega-producto',
  component: AltaProdComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
