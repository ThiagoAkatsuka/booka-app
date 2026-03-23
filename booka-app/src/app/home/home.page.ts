import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, RouterLink, NgFor, NgClass, NgStyle],
})
export class HomePage implements OnInit, OnDestroy {
  activeIndex = 0;
  private interval: any;

  // 4 imagens aleatórias do Lorem Picsum com seeds fixos
  slides = [
    'https://picsum.photos/seed/booka1/800/1200',
    'https://picsum.photos/seed/booka2/800/1200',
    'https://picsum.photos/seed/booka3/800/1200',
    'https://picsum.photos/seed/booka4/800/1200',
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    }, 3500);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }

  constructor() {}
}
