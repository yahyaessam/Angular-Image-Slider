import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesSliderComponent } from './images-slider/images-slider.component';



@NgModule({
  declarations: [ImagesSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [ImagesSliderComponent]
})
export class ImagesSliderModule { }
