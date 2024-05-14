import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private toastr: ToastrService) {

    this.contactForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.appService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('response:', response);
          this.toastr.success('Votre message a bien été envoyé', 'Message envoyé');
          this.contactForm.reset();
        },
        error: (error) => {
          this.toastr.error('Une erreur est survenue, veuillez réessayer plus tard', 'Erreur');
          console.error('error:', error);
        }
      });
    }
  }

  getErrorMessage(control: AbstractControl | null): string {
    if (control && control.errors) {
      if (control.errors['required']) {
        return 'Ce champ est obligatoire';
      }
      if (control.errors['minlength']) {
        return `Votre saisie est trop courte, le minimum est ${control.errors['minlength'].requiredLength} caractères`;
      }
      if (control.errors['email']) {
        return 'Entrez une adresse email valide';
      }
    }
    return '';
  }
  

}
