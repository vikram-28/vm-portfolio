import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(public  themeService: ThemeService){}


ngOnInit(){
  
}
toggleTheme() {
  this.themeService.toggleTheme();
}

// active state handled for navbar
activeSection = 'about';

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));
  }
}
