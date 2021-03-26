import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesPagerPageRoutingModule } from './slides-pager-routing.module';

import { SlidesPagerPage } from './slides-pager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesPagerPageRoutingModule
  ],
  declarations: [SlidesPagerPage]
})
export class SlidesPagerPageModule {}
