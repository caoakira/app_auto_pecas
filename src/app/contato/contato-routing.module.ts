import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contatoPage } from './contato.page';

const routes: Routes = [
  {
    path: '',
    component: contatoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class contatoPageRoutingModule {}
