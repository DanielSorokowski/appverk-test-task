import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AvInputComponent } from '../../shared/components/av-input/av-input.component';
import { emailPatternValidator } from '../../shared/tools/validators';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AvInputComponent, ReactiveFormsModule, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, emailPatternValidator()]],
    password: ['', Validators.required]
  })
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  handleSubmitLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true

      //simulate  loading
      setTimeout(() => {
        const token = this.generateRandomToken();
        localStorage.setItem('authToken', token);
        this.isLoading = false
        this.router.navigate(['/home']);
      }, 1000)

    } {
      this.loginForm.markAllAsTouched()
    }
  }

  private generateRandomToken(): string {
    const token = Math.random().toString(36).substring(2);
    return token;
  }

}


