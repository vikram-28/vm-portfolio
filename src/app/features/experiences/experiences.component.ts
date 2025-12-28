import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCES } from './experience.data';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  constructor(){}
  experiences = EXPERIENCES;
  selectedExperience: any;

  openExperience(exp: any) {
    this.selectedExperience = exp;

    const modalEl = document.getElementById('experienceModal');
    if (!modalEl) return;

    const modal = new Modal(modalEl);
    modal.show();
  }
}
