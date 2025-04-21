import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VideoVistaPage } from './video-vista.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot() // Añade .forRoot() aquí
  ],
  declarations: [VideoVistaPage]
})
export class VideoVistaPageModule {}