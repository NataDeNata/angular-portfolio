import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.html',
  styleUrls: ['./about-content.css'],
})
export class AboutContent {
  about_me = "This portfolio is made with ";
  isSectionVisible = false;

  @ViewChild('nextSection', { static: false }) nextSection?: ElementRef<HTMLElement>;

    toggleSection(section: HTMLElement) {
      this.isSectionVisible = !this.isSectionVisible;
      if (this.isSectionVisible) {
        // Wait a tick so CSS can apply `show` before scrolling
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
}