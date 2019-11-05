import { Component, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [];
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  title = 'prooo';
  constructor() {
    this.images = [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/1920x1260',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/400x400'
     ];
  }

   
}
