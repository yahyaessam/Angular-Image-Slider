import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.css']
})
export class ImagesSliderComponent implements OnInit, AfterViewInit {

  @Input() width: any;
  @Input() images: any[] = [];
  counter = 1;
  height: any;
  nextActive = true;
  backActive = true;
  sliderPosition = 0;
  constructor() { }

  ngOnInit() {
    if (this.width === undefined || this.width === '') {
      this.width = '700';
    } else {
      return;
    }
    this.height = (this.width / 2) + 50;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.height = (this.width / 2) + 50;
    }, 1);
  }
  moveSlider(dir) {
    if (dir === 'next' && this.counter !== this.images.length) {
      this.sliderPosition = this.counter * this.width;
      this.counter++;
    } else if (dir === 'back' && this.counter !== 1) {
      this.counter--;
      this.sliderPosition = (this.counter - 1) * this.width;
    }
  }
  thumbsLeft(wrapperWidth) {
    const extra = ((((wrapperWidth / 100) % 1) * 100).toFixed(0)) as any;
    const moveTime = ((wrapperWidth / 100).toFixed(0)) as any;
    const loops = (this.images.length / moveTime).toFixed(0) as any;
    if (this.counter <= Number(moveTime)) {
      return 0 + 'px';
    } else {
      for (let i = 1; i < loops; i++) {
        if (this.counter > (Number(moveTime) * i) && this.counter <= Number(moveTime) * (i + 1)) {
          return '-' + ((wrapperWidth - extra)) * i + 'px';
        }
      }
    }
  }
  selectThumb(index) {
    const dir = index > this.counter ? 'next' : 'back';
    this.counter = dir === 'next' ? (index - 1) : (index + 1);
    this.moveSlider(dir);

  }
}
