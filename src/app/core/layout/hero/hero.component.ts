import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
 
  contactLinks = [
    {
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vikram-mahadik-6b620b227/',
      icon: 'bi bi-linkedin'
    },
    {
      label: 'GitHub',
      value: 'GitHub',
      href: 'https://github.com/vikram-28',
      icon: 'bi bi-github'
    },
    {
      label: 'Email',
      value: 'Email',
      href: 'mailto:vikrammahadik28@gmail.com',
      icon: 'bi bi-envelope'
    }
  ];

}
