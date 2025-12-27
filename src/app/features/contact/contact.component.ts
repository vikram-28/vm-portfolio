import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
      label: 'Instagram',
      value: 'Instagram',
      href: 'https://www.instagram.com/_stranger.28/',
      icon: 'bi bi-instagram'
    }
  ];
}
