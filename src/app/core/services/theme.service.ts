import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkClass = 'dark-theme';
  private lightClass = 'light-theme';
 public  isDarkTheme : boolean = true;
  setDarkTheme() {
    const html = document.documentElement;
    html.classList.remove(this.lightClass);
    html.classList.add(this.darkClass);
  }

  setLightTheme() {
    const html = document.documentElement;
    html.classList.remove(this.darkClass);
    html.classList.add(this.lightClass);
  }

  toggleTheme() {
    const html = document.documentElement;
    this.isDarkTheme = !this.isDarkTheme;
    
    if (html.classList.contains(this.darkClass)) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }
}
