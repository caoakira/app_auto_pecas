import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { contatoPage } from './contato.page';

import { contatoPageRoutingModule } from './contato-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    contatoPageRoutingModule
  ],
  declarations: [contatoPage]
})
export class contatoPageModule {}
