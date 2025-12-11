import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact-content',
  standalone: false,
  templateUrl: './contact-content.html',
  styleUrl: './contact-content.css'
})
export class ContactContent implements OnInit {
  contactForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

 ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you can handle the form submission, e.g., send the data to a server
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

}
