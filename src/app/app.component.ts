import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/layout/header/header.component";
import { HeroComponent } from "./core/layout/hero/hero.component";
import { AboutComponent } from "./features/about/about.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ExperiencesComponent } from "./features/experiences/experiences.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { ContactComponent } from "./features/contact/contact.component";
import { ToastService } from './core/services/toast.service';
import { CommonModule } from '@angular/common';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent, ExperiencesComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vm-portfolio';
  constructor(public toast: ToastService){

  }
  ngAfterViewInit(): void {
    const tooltipTriggerList =
      document.querySelectorAll('[data-bs-toggle="tooltip"]');

    tooltipTriggerList.forEach(el => {
      new Tooltip(el);
    });
  }
}
