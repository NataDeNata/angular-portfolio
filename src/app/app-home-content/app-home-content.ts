import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-app-home-content',
  standalone: false,
  templateUrl: './app-home-content.html',
  styleUrl: './app-home-content.css'
})
export class AppHomeContent {
      welcomeText = "Hi! I'm Nathan, an aspiring ";
      intro_text = "Welcome to my Portfolio!";
      displayedText = '';
      private index = 0;


      //hide paragraph text
      showParagraph = false;

  //Typing text effect
        ngOnInit() {
      this.typeText();
  }


    typeText() {
      if (this.index < this.welcomeText.length) {
        this.displayedText += this.welcomeText[this.index];
        this.index++;
        setTimeout(() => this.typeText(), 100);
      }
    }
    //------------------------------------

    //parallax background effect
      @ViewChild('bgContent', { static: true }) bgContent!: ElementRef;

  ngAfterViewInit() {
    this.bgContent.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
      const { width, height, left, top } = this.bgContent.nativeElement.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      this.bgContent.nativeElement.style.backgroundPosition = `${50 + (x - 50) / 10}% ${50 + (y - 50) / 10}%`;
    });

    this.bgContent.nativeElement.addEventListener('mouseleave', () => {
      this.bgContent.nativeElement.style.backgroundPosition = 'center';
    });
  }
  //------------------------------------
}