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
// contactForm: FormGroup;
//   submitted = false;
//   isSubmitting = false;

//   constructor(private fb: FormBuilder, private toast: ToastService) {
//     this.contactForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(2)]],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', [Validators.required, Validators.minLength(10)]]
//     });
//   }
// ngOnInit() {
//   this.toast.show('Toast test from ngOnInit', 'success');
// }

//   get f() {
//     return this.contactForm.controls;
//   }
//   get name() {
//   return this.contactForm.get('name');
// }

// get email() {
//   return this.contactForm.get('email');
// }

// get message() {
//   return this.contactForm.get('message');
// }
// onSubmit() {
//   this.submitted = true;

//   if (this.contactForm.invalid) {
//       this.toast.show('Please fill all fields correctly', 'error');
//       return;
//     }
//   this.isSubmitting = true;

//   // Let Netlify handle submission
//   setTimeout(() => {
//     this.toast.show('Message sent successfully!', 'success');
//     this.isSubmitting = false;
//     this.contactForm.reset();
//     this.submitted = false;
    
//   }, 1000);
// }
contactLinks = [
    {
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      icon: 'bi bi-linkedin'
    },
    {
      label: 'GitHub',
      value: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: 'bi bi-github'
    },
    {
      label: 'Instagram',
      value: 'Instagram',
      href: 'https://twitter.com/yourhandle',
      icon: 'bi bi-instagram'
    }
  ];
}
