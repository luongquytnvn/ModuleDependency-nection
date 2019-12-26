import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImg = [
    {id: 0, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1', show: false},
    {id: 1, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2', show: false},
    {id: 2, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3', show: false},
  ];

  constructor() {
  }

  ngOnInit() {
    this.listImg[0].show = true;
  }

  previos(srcImg: string) {
    console.log(srcImg);
    const o = this.listImg.find(img => img.src === srcImg);
    console.log(o);
    if (o.id > 0) {
      this.listImg[o.id].show = false;
      this.listImg[o.id - 1].show = true;
    }
  }

  next(srcImg: string) {
    console.log(srcImg);
    const o = this.listImg.find(img => img.src === srcImg);
    console.log(o);
    if (o.id < this.listImg.length - 1) {
      this.listImg[o.id].show = false;
      this.listImg[o.id + 1].show = true;
    }
  }
}
