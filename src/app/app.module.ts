import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImagesSliderModule } from './images-slider/images-slider.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImagesSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
