import {Component, OnInit} from '@angular/core';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gsap-angular';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initScrollTriggers();
  }

  initScrollTriggers(): void {
    // @ts-ignore
    const temp = document.getElementById('waterDrop').getBoundingClientRect();
    const tempAnim = document.getElementById('anim').getBoundingClientRect();
    const x = temp.left - tempAnim.left + temp.width / 2;
    // @ts-ignore
    console.log(x);
    ScrollTrigger.matchMedia({
      '(max-width: 425px)': function() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.animation',
            start: 'top top',
            end: '+=5000',
            scrub: true,
            markers: true,
            pin: true,
          },
          defaults: {duration: 1}
        });
        tl.set('.apple, .branch', {xPercent: -50})
          .set('#ket', {left: x, xPercent: -50})
          .from('.apple, .branch', {y: -230, duration: 10})
          .to('.apple', {duration: 10, rotate: -10})
          .to('.apple', {duration: 10, rotate: 10})
          .to('.apple', {duration: 10, rotate: -10})
          .to('.apple', {duration: 10, y: window.innerHeight * .30, rotate: -5})
          .to('.branch', {duration: 7, y: -200}, '-=.5')
          .from('.text', {duration: 6, opacity: 0})
          .to('.text', {duration: 6, opacity: 0, delay: 3})
          .from('#cupSVG', {duration: 15, y: 1000})
          .to('.apple', {opacity: 0, duration: 0})
          .to('#water1', {attr: {visibility: 'visible'}, duration: 0})
          .to('#water2', {attr: {visibility: 'visible'}, duration: 0, delay: 1})
          .from('.text2', {duration: 10, opacity: 0})
          .to('.text2', {duration: 10, opacity: 0})
          .to('#water2', {attr: {visibility: 'hidden'}, duration: 0})
          .to('#water3', {attr: {visibility: 'visible'}, duration: 0})
          .to('#cupSVG', {y: -1000, duration: 25, delay: 5})
          .to('#waterDrop', {scaleY: 3.5, duration: 15}, '-=10')
          .to('#waterDrop', {y: 6000, duration: 10})
          .from('#ket', {bottom: -500, duration: 25}, '-=24')
          .to('#ket', {attr: {src: '../assets/img/kt-2.fw.png'}, duration: 0}, '-=12')
          .to('#ket', {attr: {src: '../assets/img/kt-3.fw.png'}, duration: 0, delay: 1}, '-=10')
          .to('#ket', {attr: {src: '../assets/img/kt-2.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-1x.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-4.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-5.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-6.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-7.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-8.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-9.fw.png'}, duration: 0, delay: 1});
      },
      '(min-width: 426px)': function() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.animation',
            start: 'top top',
            end: '+=5000',
            scrub: true,
            markers: true,
            pin: true,
          },
          defaults: {duration: 1}
        });
        tl.set('.apple, .branch', {xPercent: -50})
          .set('#ket', {left: x, xPercent: -60})
          .from('.apple, .branch', {y: -230, duration: 10})
          .to('.apple', {duration: 10, rotate: -10})
          .to('.apple', {duration: 10, rotate: 10})
          .to('.apple', {duration: 10, rotate: -10})
          .to('.apple', {duration: 10, y: window.innerHeight * .30, rotate: -5})
          .to('.branch', {duration: 7, y: -200}, '-=.5')
          .from('.text', {duration: 6, opacity: 0})
          .to('.text', {duration: 6, opacity: 0, delay: 3})
          .from('#cupSVG', {duration: 15, y: 1000})
          .to('.apple', {opacity: 0, duration: 0})
          .to('#water1', {attr: {visibility: 'visible'}, duration: 0})
          .to('#water2', {attr: {visibility: 'visible'}, duration: 0, delay: 1})
          .from('.text2', {duration: 10, opacity: 0})
          .to('.text2', {duration: 10, opacity: 0})
          .to('#water2', {attr: {visibility: 'hidden'}, duration: 0})
          .to('#water3', {attr: {visibility: 'visible'}, duration: 0})
          .to('#cupSVG', {y: -1000, duration: 25, delay: 5})
          .to('#waterDrop', {scaleY: 3.5, duration: 15}, '-=10')
          .to('#waterDrop', {y: 6000, duration: 10})
          .from('#ket', {bottom: -500, duration: 25}, '-=24')
          .to('#ket', {attr: {src: '../assets/img/kt-2.fw.png'}, duration: 0}, '-=12')
          .to('#ket', {attr: {src: '../assets/img/kt-3.fw.png'}, duration: 0, delay: 1}, '-=10')
          .to('#ket', {attr: {src: '../assets/img/kt-2.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-1x.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-4.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-5.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-6.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-7.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-8.fw.png'}, duration: 0, delay: 1})
          .to('#ket', {attr: {src: '../assets/img/kt-9.fw.png'}, duration: 0, delay: 1});
      },

    });

  }
}
