import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageEnum } from '../../../core/enums/error-message.enum';

@Component({
  selector: 'app-av-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './av-input.component.html',
  styleUrl: './av-input.component.scss'
})
export class AvInputComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() isTouched: boolean = false;

  innerValue: any = '';
  private initialType: string = this.type

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.initialType = this.type
  }

  writeValue(value: any): void {
    this.innerValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: any): void {
    let value = event.target.value;
    this.innerValue = value
    this.onChange(this.innerValue);
  }

  hasError(): boolean  {
    return (this.ngControl.touched && this.ngControl?.invalid) ?? false
  }

  getErrorMessage(): string | null {
    if (this.ngControl?.control?.errors) {
      const errors = this.ngControl.control.errors;
      const firstKey = Object.keys(errors)[0];
      return this.getErrorMessageForError(firstKey);
    }
    return null;
  }


  private getErrorMessageForError(errorName: string): string | null {
    switch (errorName) {
      case 'required':
        return ErrorMessageEnum.REQUIRED_FIELD;
      case 'invalidEmail':
        return ErrorMessageEnum.INVALID_EMAIL;
      default:
        return null;
    }
  }

  isInitTypePassword(): boolean {
    return this.initialType === 'password';
  }

  isChangedTypePassword(): boolean {
    return this.type === 'password'
  }

  handleShowPassword(): void {
    this.type = this.type === 'password' ? 'text' : 'password';
  }
}
