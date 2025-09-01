import { Component, signal, HostListener, AfterViewInit } from '@angular/core';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected readonly title = signal('my-portfolio-2');
  myPortfolio = 'My Portfolio';
  activeSection = 'home';
  private bsCollapse?: Collapse;

  ngAfterViewInit() {
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse) {
      this.bsCollapse = new Collapse(navCollapse, { toggle: false });
    }
  }

  // Highlight navbar items on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    const scrollPosition = window.scrollY + 80;

    if (homeSection && aboutSection && scrollPosition < aboutSection.offsetTop) {
      this.activeSection = 'home';
    } else if (aboutSection && contactSection && scrollPosition < contactSection.offsetTop) {
      this.activeSection = 'about';
    } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
      this.activeSection = 'contact';
    }
  }

  // Navbar item active highlight
  setActive(section: string) {
    this.activeSection = section;
    //close navbar on mobile after clicking
    if (this.bsCollapse) {
      this.bsCollapse.hide();
    }
  }
}