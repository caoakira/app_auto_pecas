import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sobrePage } from './sobre.page';

import { sobrePageRoutingModule } from './sobre-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: sobrePage }]),
    sobrePageRoutingModule,
  ],
  declarations: [sobrePage]
})
export class sobrePageModule {}
