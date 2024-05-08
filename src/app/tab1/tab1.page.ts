import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { addIcons } from 'ionicons';
import { moonOutline, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page {

  themeToggle = false;

toggleChange() {
  this.themeToggle = !this.themeToggle;
  const prefersDark = this.themeToggle;
  document.body.classList.toggle('dark', prefersDark);
  // Update the icon name based on the theme toggle
  const icon = document.querySelector('ion-icon');
  if (icon) {
    icon.setAttribute('name', prefersDark ? 'moon-outline' : 'sunny-outline');
  }
}


  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper ?: Swiper;
  images= [
    'https://www.spit.ac.in/wp-content/uploads/2009/11/Entrance.jpg',
    'https://shiksha-static-mediadata.s3.ap-southeast-1.amazonaws.com/mediadata/reviewDocument/images/1689199932157WhatsAppImage2023-07-12at00.10.20.jpg',
    'https://tse2.mm.bing.net/th?id=OIP.t2rb4VnhKaGRKA45ptVNogHaEu&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.642AhjV3eOD4gHBSSsTEqAHaE8&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.wN228DGKWKcIm2982FCmyAHaEQ&pid=Api&P=0&h=180',
    'https://www.spit.ac.in/wp-content/uploads/2022/01/highlight-of-fdp.jpg',
    'https://www.spit.ac.in/wp-content/uploads/2020/02/4_VESIMs1.png',
    'https://tse3.mm.bing.net/th?id=OIP.1T0mhjrQi_tHUzWOxS-JlAHaE7&pid=Api&P=0&h=180'
  ]
  constructor() {
    addIcons({moonOutline, sunnyOutline});
  }
  

  swiperSlideChanged(e: any) {
    console.log("Changed: ", e);
  }
  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }


}
